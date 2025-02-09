import axiosInstance from "../utils/axios";

export async function getProjects() {
  try {
    const response = await axiosInstance.get("get_projects");
    const data = response.data.data;
    return data;
  } catch (err) {
    console.error("Error fetching project data:", err);
    return null;
  }
}

export async function getProjectDetails(id) {
  try {
    const response = await axiosInstance.get(`project_details/${id}`);
    const data = response.data.data;
    return data;
  } catch (err) {
    console.error("Error fetching project details:", err);
    return null;
  }
}
