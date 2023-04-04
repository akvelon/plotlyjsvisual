import React from 'react';
import Plotly from 'react-plotly.js';

import { Frame, Layout, PlotData, Template, Transform } from "plotly.js";

export type IData = Template["data"];
export type ILayout = Template["layout"];

export interface IPlot {
  data: IData;
  layout: ILayout;
}

export default function Plot({data, layout} : IPlot) {
  if (!layout.width) {
    layout.width = 768;
  }
  if (!layout.height) {
    layout.height = 576;
  }
  return (
    <div className='plot'>
		<Plotly
            data={data}
            layout={layout}
		/>
	</div>
  );
}