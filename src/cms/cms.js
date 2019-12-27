import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import SolutionsPostPreview from "./preview-templates/SolutionsPostPreview";
import CaseStudyPreview from "./preview-templates/CaseStudyPreview";
import ServicePreview from "./preview-templates/ServicePreview";
import IndustriesPreview from "./preview-templates/IndustryPreview";
import { YoutubeLink } from "./editor-components/youtubeLink";

CMS.registerEditorComponent(YoutubeLink);
CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("solutions", SolutionsPostPreview);
CMS.registerPreviewTemplate("services", ServicePreview);
CMS.registerPreviewTemplate("industries", IndustriesPreview);
CMS.registerPreviewTemplate("case-study", CaseStudyPreview);
