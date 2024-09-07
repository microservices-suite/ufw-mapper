// Example data structure for IP addresses with additional fields
const ipData = [
    { ip: "192.168.1.1", location: "Office", status: "Active" },
    { ip: "10.0.0.1", location: "Home", status: "Inactive" },
    { ip: "172.16.0.1", location: "Data Center", status: "Active" }
  ];
  
  const tableBody = document.querySelector("#ipTable tbody");
  
  // Function to add a row to the table
  function addIPDataToTable(data) {
    const row = document.createElement("tr");
    
    const ipCell = document.createElement("td");
    ipCell.textContent = data.ip;
    row.appendChild(ipCell);
    
    const locationCell = document.createElement("td");
    locationCell.textContent = data.location;
    row.appendChild(locationCell);
    
    const statusCell = document.createElement("td");
    statusCell.textContent = data.status;
    row.appendChild(statusCell);
    
    tableBody.appendChild(row);
  }
  
  // Add initial data to the table
  ipData.forEach(addIPDataToTable);
  
  // Get the modal
  const modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  const btn = document.getElementById("openModal");
  
  // Get the <span> element that closes the modal
  const closeBtn = document.getElementById("closeModal");
  
  // Get the button that closes the modal
  const cancelBtn = document.getElementById("cancelModal");
  
  // Get the button that submits the form
  const submitBtn = document.getElementById("submitForm");
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks the cancel button, close the modal
  cancelBtn.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  // Handle form submission
  submitBtn.onclick = function() {
    const ipAddress = document.getElementById('ipAddress').value;
    const location = document.getElementById('location').value;
    const comment = document.getElementById('comment').value;
  
    // Log the form data (optional)
    console.log('IP Address:', ipAddress);
    console.log('Location:', location);
    console.log('Comment:', comment);
  
    // Create a new data object for the table
    const newIPData = {
      ip: ipAddress,
      location: location,
      status: comment // Assuming you want to use comment as status. Adjust if needed.
    };
  
    // Add the new data to the table
    addIPDataToTable(newIPData);
  
    // Close the modal after submission
    modal.style.display = "none";
  
    // Optionally, clear the form fields after submission
    document.getElementById('ipForm').reset();
  }
  