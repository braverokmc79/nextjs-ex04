const getDummyData = async () => {
    try {
      const response = await fetch("http://localhost:8080/news");
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      
      const res = await response.json();      
      return res;

    } catch (error) {
      console.error("Error fetching dummy data: ", error);
      return null;
    }
};
export const API_DUMMY_NEWS = getDummyData;
