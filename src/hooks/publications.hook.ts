import { Publications } from "@/api/publications";
import { Publication } from "@/utils/types";
import { useEffect, useState } from "react";

const publicationsCtr = new Publications();

export function usePublications() {
  const [publications, setPublications] = useState<Publication[]>();

  useEffect(() => {
    (async () => {
      try {
        const response = await publicationsCtr.getPublications();
        setPublications(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return {
    publications,
  };
}
