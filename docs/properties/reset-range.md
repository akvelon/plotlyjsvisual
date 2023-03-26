---
sidebar_position: 3
---

# Rest range on column mapping

After creating a chart, Plotly.js defines axes ranges in the “layout” object:

```json
"xaxis": {
    "range": [
        946684800000,
        978307200000
    ],
    "autorange": true,
    "type": "date"
},
"yaxis": {
    "range": [
        3914.722222222222,
        8520.277777777777
    ],
    "autorange": true,
    "type": "linear"
}
```

When the chart consumer assigns another column, in some cases it might reset and recreate axis ranges to visualize the new range of data.
