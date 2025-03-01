#include "draworientedlabel.h"

#include "chart/rendering/drawlabel.h"

#include "base/geom/angle.h"

using namespace Geom;
using namespace Vizzu;
using namespace Vizzu::Base;
using namespace Vizzu::Draw;
using namespace Vizzu::Diag;

drawOrientedLabel::drawOrientedLabel(
	const DrawingContext &context,
	const std::string &text,
	const Geom::Line &labelPos,
	const Styles::OrientedLabel &labelStyle,
	const Util::EventDispatcher::event_ptr &event,
	double centered,
	const Gfx::Color &textColor,
	const Gfx::Color &bgColor
	) :
    DrawingContext(context)
{
	if (text.empty()) return;

	Gfx::Font font(labelStyle);
	canvas.setFont(font);

	auto neededSize = canvas.textBoundary(text);
	auto margin = labelStyle.toMargin(neededSize, font.size);
	auto paddedSize = neededSize + margin.getSpace();

	auto baseAngle = labelPos.getDirection().angle() + M_PI / 2.0;

	typedef Styles::OrientedLabel::Orientation Ori;
	auto absAngle = labelStyle.orientation->combine<double>(
			[&](const auto &orientation) -> double {
				switch (orientation) {
					default:
					case Ori::horizontal: return 0.0;
					case Ori::vertical: return M_PI / 2.0;
					case Ori::normal: return labelPos.getDirection().angle();
					case Ori::tangential: 
						return labelPos.getDirection().angle() + M_PI / 2.0;
				}
			}) + labelStyle.angle->rad();

	auto relAngle = Geom::Angle(absAngle - baseAngle).rad();
	if (relAngle > M_PI) relAngle -= M_PI;

	auto xOffsetAngle = 
		relAngle < M_PI / 4.0 ? 0 :
		relAngle < 3 * M_PI / 4.0 ? M_PI / 2.0 : M_PI;

	auto offset = Geom::Point(
		- sin(relAngle + xOffsetAngle) * paddedSize.x / 2.0,
		- fabs(cos(relAngle)) * paddedSize.y / 2 
		- sin(relAngle) * paddedSize.x / 2
	) * (1 - centered) * labelPos.getDirection().abs();

	canvas.save();
	canvas.transform(Geom::AffineTransform(labelPos.begin, 1.0, baseAngle));
	canvas.transform(Geom::AffineTransform(offset, 1.0, relAngle));
	canvas.transform(Geom::AffineTransform(paddedSize/-2, 1.0, 0));

	auto realAngle = Geom::Angle(baseAngle+relAngle).rad();
	auto upsideDown = realAngle > M_PI/2.0 && realAngle < 3 * M_PI/2.0;

	if (upsideDown)
		canvas.transform(Geom::AffineTransform(paddedSize, 1.0, M_PI));

	if (!bgColor.isTransparent())
	{
		canvas.setBrushColor(bgColor);
		canvas.setLineColor(bgColor);
		canvas.rectangle(Geom::Rect(Geom::Point(), paddedSize));
	}

	auto rect = Geom::Rect(margin.topLeft(), neededSize);
	canvas.setTextColor(textColor);
	if (event->invoke(drawLabel::OnDrawParam(rect, text)))
	{
		canvas.text(rect, text);
	}

	canvas.restore();
}
