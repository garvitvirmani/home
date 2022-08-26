import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "739nf2o39od8",
    accessToken: "VNOfLJcy4uGjhoqvjKUbnnd-BP6TJLg9_PWH2i9eOmg",
    host: "preview.contentful.com",
  });

  const getNavbar = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "navBar",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const navbarFields = item.fields.title;
        return {
          ...item.fields,
          navbarFields,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching navbar ${error}`);
    }
    return "error";
  };

  const getBanner = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "banner",
        select: "fields",
      });

      // return entries;

      const sanitizedEntries = entries.items.map((item) => {
        const bimg = item.fields.bimg.fields;
        return bimg;
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching navbar ${error}`);
    }
    return "error";
  };

  const getWhychooseus = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "whychooseus",
        select: "fields",
      });

      // return entries;

      const sanitizedEntries = entries.items.map((item) => {
        const why = item.fields;
        return {
          ...item.fields,
          why,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching navbar ${error}`);
    }
    return "error";
  };

  const getWhypoints = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "whypoints",
        select: "fields",
      });

      // return entries;

      const sanitizedEntries = entries.items.map((item) => {
        const whypnt = item.fields;
        return {
          ...item.fields,
          whypnt,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching whypoinnts ${error}`);
    }
    return "error";
  };

  const getTeam = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "team",
        select: "fields",
      });

      // return entries;

      const sanitizedEntries = entries.items.map((item) => {
        const teamd = item.fields;
        return {
          ...item.fields,
          teamd,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching team ${error}`);
    }
    return "error";
  };
  const getNews = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "news",
        select: "fields",
      });

      // return entries;

      const sanitizedEntries = entries.items.map((item) => {
        const newsa = item.fields;
        return {
          ...item.fields,
          newsa,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching news ${error}`);
    }
    return "error";
  };

  const getCard = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "card",
        select: "fields",
      });

      // return entries;

      const sanitizedEntries = entries.items.map((item) => {
        const carda = item.fields;
        return {
          ...item.fields,
          carda,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching card ${error}`);
    }
    return "error";
  };
  const getContact = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "expert",
        select: "fields",
      });

      // return entries;

      const sanitizedEntries = entries.items.map((item) => {
        const cnta = item.fields;
        return {
          ...item.fields,
          cnta,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching contact expert ${error}`);
    }
    return "error";
  };
  const getCopyright = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "copyright",
        select: "fields",
      });

      // return entries;

      const sanitizedEntries = entries.items.map((item) => {
        const footera = item.fields;
        return {
          ...item.fields,
          footera,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching contact footer ${error}`);
    }
    return "error";
  };
  const getFooter = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "footer",
        select: "fields",
      });

      // return entries;

      const sanitizedEntries = entries.items.map((item) => {
        const footera = item.fields;
        return {
          ...item.fields,
          footera,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching contact copy ${error}`);
    }
    return "error";
  };
  return {
    getNavbar,
    getBanner,
    getWhychooseus,
    getWhypoints,
    getTeam,
    getNews,
    getCard,
    getContact,
    getFooter,
    getCopyright,
  };
};

export default useContentful;
