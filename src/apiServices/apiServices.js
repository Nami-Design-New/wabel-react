import axiosInstance from "../utils/axios";

export async function getServices() {
  try {
    const response = await axiosInstance.get("get_Services");
    const data = response.data.data;
    return data;
  } catch (e) {
    console.error("Error fetching services data:", e);
    return null;
  }
}

export async function getServiceDetails(id) {
  try {
    const response = await axiosInstance.get(`service_details/${id}`);
    const data = response.data.data;
    return data;
  } catch (e) {
    console.error("Error fetching service details:", e);
    return null;
  }
}
