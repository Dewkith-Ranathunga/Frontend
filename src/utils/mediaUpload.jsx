import { createClient } from "@supabase/supabase-js";

const url = "https://gracsrqabnkrrlzlktgj.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyYWNzcnFhYm5rcnJsemxrdGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNjc2OTMsImV4cCI6MjA2NDk0MzY5M30.9KTipwwOlABbKOMGdUvhkZ5bZUTUYGNhzTTJGrl0fEg";

const supabase = createClient(url, key);

export default function mediaUpload(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject("No file provided");
            return;
        }

        const timestamp = new Date().getTime();
        const newName = timestamp + file.name;

        supabase.storage.from('images').upload(newName, file, {
            cacheControl: '3600',
            upsert: false
        }).then(() => {
            const publicUrl = supabase.storage.from('images').getPublicUrl(newName).data.publicUrl;
            resolve(publicUrl);
            console.log("File uploaded successfully:", publicUrl);
        }).catch((error) => {
            reject("Error uploading file: " + error.message);
            console.log(error);
        });
    });
}