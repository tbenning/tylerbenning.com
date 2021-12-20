import {
  NotEditable,
  component,
  fields,
} from "@keystone-6/fields-document/component-blocks"
import { gallery } from "keystone6-document-gallery-block"

// naming the export componentBlocks is important because the Admin UI
// expects to find the components like on the componentBlocks export
export const componentBlocks = {
  gallery: gallery({
    listKey: "Image",
  }),
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
          <span>{props.imageSrc.value}</span>
          <span>{props.altText.value}</span>
          <span>{props.caption.value}</span>
        </NotEditable>
      )
    },
    label: "Image",
    props: {
      width: fields.text({ label: "Width", defaultValue: "600" }),
      height: fields.text({ label: "Height", defaultValue: "300" }),
      imageSrc: fields.text({
        label: "Image URL",
        defaultValue: "/img/uploaded/e19564bb-6eb6-4ca6-afb6-5e3dea459529.png",
      }),
      altText: fields.text({ label: "Alt Text" }),
      caption: fields.text({ label: "Caption" }),
    },
  }),
}
