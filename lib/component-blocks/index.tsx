// @ts-nocheck
import {
  NotEditable,
  component,
  fields,
} from "@keystone-6/fields-document/component-blocks"

export const componentBlocks = {
  quote: component({
    component: ({ attribution, content }) => {
      return (
        <div
          style={{
            borderLeft: "3px solid #CBD5E0",
            paddingLeft: 16,
          }}
        >
          <div style={{ fontStyle: "italic", color: "#4A5568" }}>{content}</div>
          <div style={{ fontWeight: "bold", color: "#718096" }}>
            <NotEditable>— </NotEditable>
            {attribution}
          </div>
        </div>
      )
    },
    label: "Quote",
    props: {
      content: fields.child({
        kind: "block",
        placeholder: "Quote...",
        formatting: { inlineMarks: "inherit", softBreaks: "inherit" },
        links: "inherit",
      }),
      attribution: fields.child({
        kind: "inline",
        placeholder: "Attribution...",
      }),
    },
    chromeless: true,
  }),
  image: component({
    component: (props) => {
      return (
        <NotEditable>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li>
              <span style={{ fontWeight: "bold" }}>URL</span>{" "}
              {props.image.value?.data?.image?.url}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Alt</span>{" "}
              {props.image.value?.data?.alt}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Caption</span>{" "}
              {props.caption.value}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>W x H</span>{" "}
              {props.width.value} x {props.height.value}
            </li>
          </ul>
        </NotEditable>
      )
    },
    label: "Image Content",
    props: {
      image: fields.relationship({
        label: "Inline Image",
        relationship: "inlineImage",
      }),
      width: fields.text({ label: "Width", defaultValue: "768" }),
      height: fields.text({ label: "Height", defaultValue: "384" }),
      caption: fields.text({ label: "Caption" }),
    },
  }),
}
