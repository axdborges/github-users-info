export const parseDate = (isoDate: string) => {
    const date = new Date(isoDate);

    const day = String(date.getUTCDate()).padStart(2, "0"); 
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); 
    const year = date.getUTCFullYear(); 

    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
  };