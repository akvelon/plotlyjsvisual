---
sidebar_position: 9
---

# Highlights

Highlights on the visual [allow showing sections of data](https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-reports-filters-and-highlighting) related to selected data points in other visuals.

![Highlights](./img/highlights.gif)

To create such visualization in the PlotlyJS Visual, the visual provides highlighted values as a regular column of the table:

![Highlights](./img/highlights1.webp)

The values of those columns always are less than the values of the corresponding un-highlighted columns.

To add highlights for charts, you need to enable the property in the visual settings:

![Highlights columns property](./img/highlights2.webp)

Then create the second bars behind and assign different columns (highlight and values columns) for them.

Click on “+ Trace” to add a new trace to the chart:

![Add trace button](./img/highlights3.webp)

New trace:

![Add the new trace](./img/highlights4.webp)

Assign `Country` and `Segment` columns to X axis. Assign `Sales (Highlights)` to Y axis.

After that, you will have a chart with new columns:

![The chart with two bars](./img/highlights5.webp)

Change the opacity of the first trace in the styles section:

![Opacity property](./img/highlights6.webp)

Those bars will be behind the chart to visualize the un-highlighted values.

Add the new X axis for the second trace (Name is `trace 1`) in the Trace tab of the editor in the `Axes to Use` panel:

![The new axis](./img/highlights7.webp)

After that, the chart shifts the `trace 1` to the foreground and adds the second X axis on top:

![Shift trace 1](./img/highlights8.webp)

We don’t need the second X axis (xaxis2) for hiding it, you just need to set false for the “visible” property in the JSON editor:

![Hide axis](./img/highlights9.webp)

It almost ready — you can save and interact with other visuals in the Power BI report to see the result:

![Intermediate result](./img/highlights10.webp)

The final part is color — you need to set the same color for the second trace too in the “Styles” tab:

![Apply styles](./img/highlights11.webp)

Hide the legend, as we don’t need it here for single trace:

![Hide the legend](./img/highlights12.webp)