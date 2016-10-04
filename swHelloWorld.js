'use strict';

// If all the files are successfully cached, then the service worker is installed.
self.addEventListener('install', function (event) {
  // Perform install steps
  console.log('Service worker was installed!');
});

// After the service worker is installed, it is then activated, meaning it can start controlling what the user gets!
self.addEventListener('activate', function (event) {
  console.log(`You're good to go!`);
});


self.addEventListener('fetch', function (event) {
  console.log("Intercepted a fetch: " + event.request);    // Hello World!
  event.respondWith(new Response(helloWorldResponse, {
    headers: {'Content-Type': 'text/html'}
  }));
});


// For the hello world purposes
var helloWorldResponse = `
<!DOCTYPE html>
<html>
<body style="text-align: center;">
  <h2 style="font-size: 48px;">Internet connection ?</h2>
  <svg version="1.1" id="Layer_1" xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
     x="0px" y="0px" width="100%" viewBox="30 110 760 450" enable-background="new 0 0 760 450" xml:space="preserve">
    <g>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#3C2415" d="M32.025,492.549c3.846-1.537,7.755-2.937,11.528-4.637
        c18.19-8.192,36.088-10.493,55.518-2.448c22.92,9.491,44.466-0.013,64.408-10.396c4.712-2.454,4.912-13.578,7.643-22.146
        c-13.983,0.848-25.478,1.848-36.992,2.179c-19.982,0.573-34.409-8.011-42.431-26.716c-1.304-3.041-3.077-5.932-4.974-8.656
        c-8.167-11.731-13.267-12.758-25.513-5.376c0.807-8.957,6.05-13.654,13.842-9.703c7.325,3.714,15.752,9.749,18.68,16.833
        c10.663,25.818,30.352,30.751,54.931,27.984c22.69-2.556,22.661-2.353,25.886-24.821c1.895-13.192,5.36-26.324,5.667-39.541
        c0.438-18.916,1.117-38.399-2.68-56.735c-11.546-55.742-20.354-111.522-15.673-168.665c0.406-4.95,1.417-9.905,2.663-14.723
        c6.307-24.368,25.053-34,46.517-21.136c28.165,16.878,55.419,35.483,81.807,55.044c16.972,12.583,32.261,27.643,47.206,42.684
        c10.393,10.46,21.369,16.112,36.41,15.573c22.912-0.82,45.959,0.89,68.768-0.842c9.441-0.716,20.719-5.305,27.228-11.973
        c37.887-38.814,80.741-70.927,127.508-97.923c28.002-16.165,49.835-6.888,52.579,25.393c2.837,33.39,1.602,67.444-1.312,100.906
        c-2.443,28.063-8.944,55.907-15.369,83.449c-5.429,23.27-0.68,45.569,2.472,68.196c0.92,6.594,2.134,13.147,3.25,19.715
        c3.786,22.293,3.771,22.477,25.582,25.094c22.486,2.7,44.224,0.932,54.931-27.415c2.299-6.086,8.32-11.555,13.93-15.418
        c8.403-5.789,15.899-2.456,19.389,6.425c-5.209-0.699-11.474-3.373-16.121-1.66c-4.845,1.786-9.92,7.12-11.806,12.077
        c-11.522,30.306-35.178,34.861-63.157,31.282c-4.952-0.633-9.925-1.105-14.894-1.598c-0.312-0.03-0.671,0.421-1.009,0.646
        c-2.044,18.342-0.926,20.207,15.155,26.879c20.21,8.383,40.064,12.481,61.516,2.464c13.885-6.484,28.622-2.312,42.604,2.922
        c4.904,1.834,10.105,2.876,15.171,4.28c0,2.502,0,5.005,0,7.508c-6.99-2.651-13.98-5.305-20.972-7.957
        c-13.837-5.249-27.392-5.571-41.269,0.627c-19.477,8.701-38.398,3.14-57.045-3.723c-3.78-1.391-7.463-3.046-11.861-4.855
        c-4.749,22.649,13.339,30.76,24.984,40.231c11.878,9.662,27.944,14.174,41.949,20.833c-12.035,3.104-24.021-1.504-34.519-8.186
        c-10.629-6.764-22.956-6.97-44.939-41.061c-30.109,44.937-71.07,62.207-121.703,59.246c-3.262-0.191-6.616-1.024-9.663-2.229
        c-8.968-3.548-10.417-9.238-3.459-16.108c31.754-31.353,18.278-41.671-3.521-62.184c-12.122-11.407-25.783-21.183-37.864-32.628
        c-7.731-7.324-13.847-16.353-20.687-24.618l0.311,0.354c-4.358-9.969-9.218-19.76-12.835-29.99
        c-1.525-4.313-1.345-9.747-0.368-14.336c4.62-21.681,6.38-42.686-6.664-62.652c-10.026-15.346-16.987-15.682-27.725-0.945
        c-12.822,17.6-14.498,36.618-9.437,57.063c2.352,9.496,6.471,19.63-5.009,26.678c-0.293,0.18-0.462,0.712-0.518,1.104
        c-4.957,34.583-31.861,52.108-55.704,72.163c-8.247,6.938-16.042,14.571-23.148,22.671c-10.765,12.271-10.686,21.663-0.791,34.66
        c2.767,3.633,6.478,6.586,8.993,10.358c2.563,3.847,6.666,9.2,5.569,12.287c-1.256,3.537-7.198,6.679-11.61,7.617
        c-21.447,4.557-42.111,0.371-62.4-6.935c-29.167-10.504-45.904-23.877-62.881-51.878c-18.581,31.988-53.772,52.095-82.184,50.255
        c15.061-7.132,31.252-11.673,43.27-21.382c11.669-9.426,30.091-17.368,25.17-38.912c-13.153,3.609-25.697,8.322-38.648,10.176
        c-9.112,1.305-19.833,1.062-27.987-2.603c-18.689-8.399-35.571-4.908-53.001,2.52c-3.799,1.621-8.438,1.273-12.689,1.833
        C32.025,494.218,32.025,493.384,32.025,492.549z M628.242,133.598c-0.51-1.344-1.02-2.689-1.529-4.033
        c-6.914,3.5-15.645,5.387-20.431,10.776c-22.082,24.862-42.682,51.036-64.6,76.051c-11.373,12.98-23.808,25.208-36.984,36.331
        c-4.258,3.594-12.753,4.484-18.713,3.382c-51.863-9.587-103.566-9.409-155.443-0.161c-6.003,1.07-14.446,0.424-18.736-3.103
        c-12.996-10.685-25.352-22.438-36.416-35.121c-22.136-25.373-42.965-51.883-64.958-77.387c-6.163-7.146-14.545-12.23-23.216-7.61
        c9.205,6.887,20.155,12.456,27.553,21.073c30.34,35.34,59.597,71.608,88.389,106.49c-11.598,4.315-26.404,7.868-39.196,15.023
        c-21.719,12.148-32.841,33.41-42.247,55.681c-3.483,8.249-7.879,16.684-13.868,23.181c-10.593,11.493-14.412,18.891-13.609,36.04
        c1.19-1.948,2.205-3.246,2.844-4.706c13.274-30.344,34.502-48.088,69.579-45.956c15.83,0.963,29.146-5.943,39.522-18.058
        c5.422-6.332,11.082-12.502,16.016-19.201c8.084-10.976,18.919-16.774,31.883-20.363c34.236-9.474,68.211-8.333,102.643-0.83
        c17.319,3.773,30.908,11.512,40.669,26.256c15.22,22.993,36.028,34.577,64.288,33.109c16.703-0.869,30.902,5.924,40.852,20.026
        c6.616,9.376,13.096,18.848,19.638,28.277c-0.679-9.519-0.64-22.025-6.769-27.134c-13.479-11.24-18.879-25.984-25.41-40.731
        c-13.918-31.421-36.535-52.252-71.264-58.282c-3.077-0.536-6.078-1.501-12.018-2.998c24.095-12.476,35.229-33.228,49.182-51.822
        C576.723,180.045,596.497,150.833,628.242,133.598z M457.983,391.919c3.637,38.673,39.795,66.006,79.483,61.264
        c31.592-3.774,56.393-34.021,51.817-64.351c-5.359-0.636-10.976-1.302-16.469-1.953c-2.785,8.952-4.411,17.199-7.833,24.616
        c-10.337,22.406-35.016,27.418-52.33,9.983c-7.099-7.149-11.16-17.269-16.936-25.812c-1.779-2.632-4.704-6.465-7.03-6.414
        C478.424,389.478,468.189,390.921,457.983,391.919z M323.187,388.624c-8.377,21.287-17.521,43.586-44.267,42.711
        c-26.22-0.856-30.488-23.882-34.963-43.96c-19.813,0.173-21.565,2.403-16.914,20.174c7.996,30.554,36.204,49.155,69.521,45.847
        c31.475-3.126,60.028-31.185,61.375-61.595C346.611,390.765,335.21,389.722,323.187,388.624z M278.992,398.892
        c0.063-1.856,0.127-3.713,0.191-5.569c-4.464-3.076-9.535-9.217-13.244-8.482c-5.09,1.01-11.156,6.541-12.853,11.489
        c-0.934,2.722,6.492,11.885,9.685,11.658C268.366,407.587,273.604,402.194,278.992,398.892z M498.53,395.123
        c5.525,4.722,9.266,7.92,13.008,11.118c2.163-2.913,6.727-6.804,6.018-8.545c-1.765-4.328-5.934-7.674-9.138-11.415
        C505.748,388.669,503.076,391.058,498.53,395.123z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#3C2415" d="M442.312,414.944c1.64,9.009-0.05,12.848-11.074,11.321
        c-6.553-0.907-13.904,3.963-21.048,8.567c33.404,1.25,51.246,21.252,63.157,47.993c3.37,7.568,3.275,16.679,4.77,25.082
        c-1.802,0.491-3.604,0.981-5.406,1.473c-1.442-3.146-3.724-6.169-4.198-9.454c-5.161-35.715-26.641-57.255-55.614-55.393
        c-34.163,2.195-62.662,32.322-62.501,66.091c0.006,1.244,0.686,2.721,0.22,3.687c-1.396,2.898-3.203,5.598-4.851,8.373
        c-1.33-2.701-3.642-5.333-3.837-8.114c-2.034-28.965,18.438-58.095,49.597-71.05c4.722-1.964,9.488-3.821,16.587-6.674
        c-9.779-6.128-15.693-13.079-25.916-7.245c-2.295,1.309-6.594-0.895-9.971-1.481c0.925-3.398,0.956-7.468,2.92-10.087
        c12.923-17.229,49.545-18.547,67.476-2.736C442.622,415.298,442.312,414.944,442.312,414.944z M413.639,425.294"/>
    </g>
    <g>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#00A79D" d="M323.158,389.03c-8.378,21.287-17.521,43.586-44.267,42.711
        c-26.22-0.855-30.488-23.882-34.963-43.959c-19.813,0.173-21.565,2.402-16.914,20.174c7.996,30.554,36.204,49.155,69.521,45.847
        c31.475-3.126,60.027-31.185,61.375-61.595C346.583,391.172,335.182,390.13,323.158,389.03z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#00A79D" d="M457.986,392.603c3.637,38.673,39.795,66.006,79.482,61.264
        c31.592-3.774,56.393-34.021,51.818-64.351c-5.359-0.636-10.977-1.302-16.469-1.953c-2.785,8.952-4.412,17.199-7.834,24.616
        c-10.336,22.406-35.016,27.418-52.33,9.983c-7.098-7.149-11.16-17.269-16.936-25.812c-1.779-2.632-4.703-6.465-7.029-6.414
        C478.426,390.161,468.191,391.604,457.986,392.603z"/>
    </g>
  </svg>
  <h1 style="font-size: 60px;">NOPE !</h1>
</body>
</html>
`;