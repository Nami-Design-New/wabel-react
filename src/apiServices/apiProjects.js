import axiosInstance from "../utils/axios";

export async function getProject() {
  try {
    const response = await axiosInstance.get("get_projects");
    const data = response.data.data;
    return data;
  } catch (err) {
    console.error("Error fetching project data:", err);
    return null;
  }
}
