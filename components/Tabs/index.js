// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const Tab = topic => {
    // Tab creation
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.dataset.topic = topic === 'node.js' ? 'node' : topic;
    tab.textContent = topic;

    // Add event listener
    tab.addEventListener('click', event => {
        if(event.target.dataset.topic === 'all'){
            return document.querySelectorAll('.card').forEach(card => card.style.display = 'flex');
        }
        document.querySelectorAll('.card').forEach(card => {
            card.dataset.topic === event.target.dataset.topic ? card.style.display = 'flex' : card.style.display = 'none';
        });
    });

    // Returning just to make it feel more React-esque
    return document.querySelector('.topics').appendChild(tab);
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => [...res.data.topics, 'all'].forEach(topic => Tab(topic)))
    .catch(err => {
        console.log(err);
        document.querySelector('.topics').textContent = 'Data retrieval error occured';
    });