const ctx = document.getElementById('myChart3');

// get data from country.json
fetch('country.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const country = data.map(item => item.country);
        const expectancy = data.map(item => item.expectancy);
        // group data by country
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: country,
                datasets: [{
                    label: '# of Votes',
                    data: expectancy,
                    borderWidth: 1,
                    
                    backgroundColor: function () {
                        var o = Math.round, r = Math.random, s = 255;
                        return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
                    }
                 
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
    })
                    // console.log(backgroundColor)
