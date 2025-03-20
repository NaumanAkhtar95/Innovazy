import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export async function sendMail(body) {
    try {
        const res = await axios.post('http://localhost:5000/email', body, config);
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    }

    catch (e) {
        const errors = e.response.data.errors;
        if (errors) {
            return { output: errors, type: "error" };
        }
    }
}




export const fetchPosts = async () => {
    try {
      // Fetching data from WordPress REST API
      const res = await axios.get('http://headless.local/wp-json/wp/v2/posts?_embed', config);
      if (res && res.data) {
        return { data: res.data, type: 'success' }; // Return data on success
      }
    } catch (e) {
      const errors = e.response?.data?.errors || e.message;
      return { data: errors, type: 'error' }; // Return errors if any
    }
  };