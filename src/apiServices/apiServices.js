import axiosInstance from "../utils/axios";

export async function getServices() {
  try {
    const response = await axiosInstance.get("get_Services");
    const data = response.data.data;
    return data;
  } catch (err) {
    console.error("Error fetching services data:", err);
    return null;
  }
}
