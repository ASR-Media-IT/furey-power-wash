"use client";
import { useEffect } from "react";
/**
 * @typedef {import("@prismicio/client").Content.RequestFormSlice} RequestFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RequestFormSlice>} RequestFormProps
 * @type {import("react").FC<RequestFormProps>}
 */
const RequestForm = ({ slice }) => {
  useEffect(() => {
    // Create the script element dynamically
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "2db3923b-15a5-43e4-b611-009a5c5bcece");
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/2db3923b-15a5-43e4-b611-009a5c5bcece/public/work_request/embedded_work_request_form");
    script.async = true;
    document.body.appendChild(script);
    
    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div id="2db3923b-15a5-43e4-b611-009a5c5bcece"></div>
    </section>
  );
};

export default RequestForm;
