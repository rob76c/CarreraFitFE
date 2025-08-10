import { API_URL, user, pass } from "./config";

export const listWorkouts = async () => {
      //fetch workouts localhost 8080
      const res = await fetch(`${API_URL}/workouts/`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(user+":"+pass)}`
        }
      });
      if(res.status !== 200) {
        throw new Error("Error fetching the workouts");
      }
      const data = await res.json();
      return await data;
};