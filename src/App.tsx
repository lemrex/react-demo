import './App.css';
import React, {useEffect, useState} from 'react';

interface UploadProfilePicProps {
  // Add any additional props you might need here
}

// const App: React.FC<UploadProfilePicProps> = () => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedFile(event.target.files ? event.target.files[0] : null);
//   };
//
//   const handleUpload = async () => {
//     if (!selectedFile) {
//       alert('Please select a profile picture to upload.');
//       return;
//     }
//
//     const formData = new FormData();
//     formData.append('profilePic', selectedFile);
//     formData.append("firstName", "Louis")
//     formData.append("lastName", "ohaegbu")
//     formData.append("emailAddress", "LOUIS@gmail.com")
//     formData.append("username", "loidUIOP")
//     formData.append("password", "MONKEYSex")
//
//     const response = await fetch('http://localhost:3000/api/v1/users/signup', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         Authorization: `Token eae314550cf3487176182cf7497ab5f4b3a74c88`, // Replace with your token
//       },
//       body: formData,
//     });
//
//     if (response.ok) {
//       const data: any = await response.json(); // Response type might be more specific depending on your API
//       console.log('Profile picture uploaded successfully:', data);
//       // Handle successful upload (e.g., update UI, display confirmation)
//     } else {
//       console.error('Error uploading profile picture:', response.statusText);
//       // Handle upload error (e.g., display error message)
//     }
//   };
//
//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload Profile Picture</button>
//     </div>
//   );
// };

const App: React.FC = () => {
  useEffect(() => {
    // Replace this URL with your WebSocket endpoint
    // const websocketUrl = 'wss://test-staging-aws.swearit.io/websockets/?user_id=27bcdddc-136c-46c5-be9d-84c226a594f3';
    // const websocketUrl = "ws://localhost:8000/websockets/?user_id=8697c17c-6a13-4151-8d88-ad7f9d73bafa";
    const websocketUrl = "ws://localhost:8001/ws/core/1e7cb79df3d3fa88ce3e03bcec41e90d036a4df5/"
    const socket = new WebSocket(websocketUrl);

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event: MessageEvent) => {

      console.log('Received message:', event.data);
    };


    socket.onerror = (error: Event) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Cleanup on unmount
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          WebSocket Demo
        </p>
      </header>
    </div>
  );
}


export default App;
