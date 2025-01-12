import { loadHTML, loadCSS } from '../../utils.js';
const api_add = "http://127.0.0.1:8000"

async function Home() {
  const html = await loadHTML('./components/home/home.html');
  loadCSS('./components/home/home.css');

  const app = document.getElementById('app');
  app.innerHTML = html;

  const getquality = document.getElementById('btn_download');
  getquality.addEventListener("click", getQualities);
  const getquality1 = document.getElementById('btn_download1');
  getquality1.addEventListener("click", downloadVideo);



    const facebook = document.getElementById('face');
    const instagram = document.getElementById('insta');
    const x = document.getElementById('x');
    const snapchat = document.getElementById('snap');
    const youtube = document.getElementById('yout');

    const big_img = document.getElementById('imagee');
    const input_color = document.getElementById('input_data');
    const mall_img = document.querySelectorAll('#btn_download1 .image_cha');
    const mall_img1 = document.querySelectorAll('#btn_download .image_cha');

    facebook.addEventListener("click", () => {
        big_img.src = "../../images/vecteezy_facebook-3d-illustration_13212095.png";
        input_color.style.borderColor = '#3AA5E8';
        mall_img.forEach((index) => {
            index.src = "./../images/vecteezy_facebook-3d-illustration_13212095.png";
        });
        mall_img1.forEach((index) => {
            index.src = "./../images/vecteezy_facebook-3d-illustration_13212095.png";
        });

    });
    instagram.addEventListener("click", () => {
        big_img.src = "../../images/vecteezy_instagram-3d-illustration_13212099.png";
        input_color.style.borderColor = ' #BF61C3';
        mall_img.forEach((index) => {
            index.src = "../../images/vecteezy_instagram-3d-illustration_13212099.png";
        });
        mall_img1.forEach((index) => {
            index.src = "../../images/vecteezy_instagram-3d-illustration_13212099.png";
        });

    });
    x.addEventListener("click", () => {
        big_img.src = "../../images/vecteezy_twitter-3d-illustration_13191636.png";
        input_color.style.borderColor = ' #35C2F0';
        mall_img.forEach((index) => {
            index.src = "../../images/vecteezy_twitter-3d-illustration_13191636.png";
        });
        mall_img1.forEach((index) => {
            index.src = "../../images/vecteezy_twitter-3d-illustration_13191636.png";
        });

    });
    snapchat.addEventListener("click", () => {
        big_img.src = "../../images/vecteezy_snapchat-3d-illustration_13212098.png";
        input_color.style.borderColor = ' #E5E947';
        mall_img.forEach((index) => {
            index.src = "../../images/vecteezy_snapchat-3d-illustration_13212098.png";
        });
        mall_img1.forEach((index) => {
            index.src = "../../images/vecteezy_snapchat-3d-illustration_13212098.png";
        });

    });
    youtube.addEventListener("click", () => {
        big_img.src = "../../images/vecteezy_youtube-3d-illustration_13212092.png";
        input_color.style.borderColor = '#F32725';
        mall_img.forEach((index) => {
            index.src = "../../images/vecteezy_youtube-3d-illustration_13212092.png";
        });
        mall_img1.forEach((index) => {
            index.src = "../../images/vecteezy_youtube-3d-illustration_13212092.png";
        });

    });



}


async function downloadVideo() {
    const url = document.getElementById('input_data').value;
    const qualityUrl = document.getElementById('qualitySelect').value;
    console.log("hello we are smart than what you think");

    const formData = new FormData();
    formData.append('url', url);
    formData.append('quality_url', qualityUrl);


    try {
        document.getElementById('message').innerText = 'Download started!';
        const response = await fetch('http://127.0.0.1:8000/api/download/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
            },
            credentials: 'include',
            body: formData,
        });
        
        const jsonData = await response.json();
        console.log("Received data: ", jsonData);

        if (!response.ok) {
            document.getElementById('message').innerText = 'Error: ' + data.error;
        } else {
            // You can process jsonData if the response is OK.
            console.log('Data fetched successfully:', response);
            document.getElementById('message').innerText = 'Download Finish!';
            setTimeout(() => {
                document.getElementById('qualitySelect').style.display = "none"
                document.getElementById('btn_download').style.display = "flex";
                document.getElementById('btn_download1').style.display = "none";
                document.getElementById('message').innerText = '';
    
            }, 1000); 
        }
    } catch (error) {
        document.getElementById('message').innerText = 'Error... ';
    }

}




function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function getQualities() {
    console.log("Fetching qualities...");
    const url = document.getElementById('input_data').value.trim();
    console.log("csrftoken: ", getCookie('csrftoken'));
    console.log("url: ", url);
    const formData = new FormData();
    formData.append('url', url);

    if (!url) {
        document.getElementById('message').innerText = 'Please enter a valid URL.';
        return;
    }

      try {
        document.getElementById('message').innerText = 'Wait for getting qualities ...!';

          const response = await fetch('http://127.0.0.1:8000/api/qualities/', {
              method: 'POST',
              headers: {
                  'X-CSRFToken': getCookie('csrftoken'),
              },
              credentials: 'include',
              body: formData,
          });
          
          const jsonData = await response.json();
          console.log("Received data: ", jsonData);
  
          if (!response.ok) {
              console.error(`Status: ${response.status}, Message: ${response.message || 'Unknown error'}`);
          } else {
              console.log('Data fetched successfully:', response);
              document.getElementById('message').innerText = '';
            const qualitySelect = document.getElementById('qualitySelect');
            qualitySelect.innerHTML = '<option value="">Select quality</option>';
            jsonData.qualities.forEach(quality => {
                const option = document.createElement('option');
                option.value = quality.url;
                const sizeText = quality.filesize ? ` (${formatBytes(quality.filesize)})` : '';
                option.textContent = `${quality.quality}${sizeText}`;
                qualitySelect.appendChild(option);
            });
            qualitySelect.style.display = "flex";
            document.getElementById('btn_download').style.display = "none";
            document.getElementById('btn_download1').style.display = "flex";




          }
      } catch (error) {
        document.getElementById('message').innerText = 'Error...!';
      }
  
}

export default Home;
