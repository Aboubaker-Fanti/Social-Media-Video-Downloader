<h1>Social Media Video Downloader</h1>
<p>A user-friendly web application that enables you to download videos from platforms like Facebook, Instagram, YouTube, and more. Built with HTML, CSS, JavaScript (SPA), Django for backend logic, and Docker for seamless deployment.</p>

<h2 style="border-bottom: 2px solid #ccc; padding-bottom: 5px;">Features</h2>
<ul style="list-style-type: disc; padding-left: 20px; line-height: 1.6;">
    <li><strong>Download videos</strong> from popular social media platforms.</li>
    <li><strong>Responsive Single-Page Application (SPA)</strong> design for seamless user interaction.</li>
    <li><strong>Dockerized</strong> for easy setup and deployment.</li>
</ul>

<h2 style="border-bottom: 2px solid #ccc; padding-bottom: 5px;">Prerequisites</h2>
<ul style="list-style-type: circle; padding-left: 20px; line-height: 1.6;">
    <li><strong>Git:</strong> Ensure Git is installed on your system.</li>
    <li><strong>Docker and Docker Compose:</strong> Install them to run the application.</li>
</ul>

<h2>Getting Started</h2>
<ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/Aboubaker-Fanti/Social-Media-Video-Downloader.git</code></pre>
    <li>Use the <code>Makefile</code> commands for setup and execution.</li>
</ol>

<h2>Makefile Commands</h2>
<table style="width:100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ccc; padding: 8px; background-color: #f8f8f8;">Command</th>
            <th style="border: 1px solid #ccc; padding: 8px; background-color: #f8f8f8;">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ccc; padding: 8px;"><code>all</code></td>
            <td style="border: 1px solid #ccc; padding: 8px;">Builds and starts the Docker containers.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ccc; padding: 8px;"><code>down</code></td>
            <td style="border: 1px solid #ccc; padding: 8px;">Stops the Docker containers and removes volumes for a clean state.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ccc; padding: 8px;"><code>clean</code></td>
            <td style="border: 1px solid #ccc; padding: 8px;">Same as <code>down</code>: stops containers and removes volumes.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ccc; padding: 8px;"><code>fclean</code></td>
            <td style="border: 1px solid #ccc; padding: 8px;">Removes all unused Docker resources: containers, images, networks, and volumes.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ccc; padding: 8px;"><code>re</code></td>
            <td style="border: 1px solid #ccc; padding: 8px;">Runs <code>clean</code> followed by <code>all</code> to clean and restart the app.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ccc; padding: 8px;"><code>reall</code></td>
            <td style="border: 1px solid #ccc; padding: 8px;">Runs <code>fclean</code> followed by <code>all</code> to perform a full cleanup and rebuild.</td>
        </tr>
    </tbody>
</table>

<h2>How to Use</h2>
<ul>
    <li>To build and start the containers:
        <pre><code>make all</code></pre>
    </li>
    <li>To stop and clean up:
        <pre><code>make down</code></pre>
    </li>
    <li>To fully clean the Docker system:
        <pre><code>make fclean</code></pre>
    </li>
    <li>To restart the application (clean & rebuild):
        <pre><code>make re</code></pre>
    </li>
    <li>To do a complete cleanup and rebuild:
        <pre><code>make reall</code></pre>
    </li>
</ul>

<h2>Accessing the Application</h2>
<ul>
    <li><strong>Frontend:</strong> Open <a href="http://localhost:8899" target="_blank">http://localhost:8899</a> in your browser.</li>
    <li><strong>Backend:</strong> Access the API at <a href="http://localhost:8000" target="_blank">http://localhost:8000</a>.</li>
</ul>
<h2 style="border-bottom: 2px solid #ccc; padding-bottom: 5px;">Usage</h2>
<ul style="list-style-type: disc; padding-left: 20px; line-height: 1.6;">
    <li><strong>Navigate</strong> to the frontend URL in your browser.</li>
    <li><strong>Paste</strong> the URL of the video you want to download.</li>
    <li><strong>Click</strong> the download button. The video will be saved locally in the <code>social_media</code> folder.</li>
</ul>

<h2 style="border-bottom: 2px solid #ccc; padding-bottom: 5px;">Where to Find Your Downloads</h2>
<p>The downloaded videos are stored in the <code>social_media</code> folder inside the <code>download</code> subfolder. Here’s an example path:</p>
<pre><code>social_media/download/&lt;your-video.mp4&gt;</code></pre>

<h2 style="border-bottom: 2px solid #ccc; padding-bottom: 5px;">Technologies Used</h2>
<ul style="list-style-type: disc; padding-left: 20px; line-height: 1.6;">
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript (SPA)</li>
    <li><strong>Backend:</strong> Python, Django</li>
    <li><strong>DevOps:</strong> Docker</li>
</ul>

<h2 style="border-bottom: 2px solid #ccc; padding-bottom: 5px;">Contributing</h2>
<p>Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.</p>

