import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface IpData {
  city: string;
  region: string;
}

export const GeoIP = (): JSX.Element => {
  const [ipData, setIpData] = useState<IpData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<IpData> = await axios.get("http://ip-api.com/json/");
        setIpData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {ipData ? (
        <div>
          <p>
            {ipData.city}, {ipData.region}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
