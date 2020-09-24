export function sortByDate(x) {
    x.sort(function(a, b) {
        const  dateA = new Date(a.date), 
               dateB = new Date(b.date); 
        return dateA - dateB;
    });
}

export function sortAlphabetically(x) {
    x.sort(function(a, b){
        if(a.text.toLowerCase() < b.text.toLowerCase()) { return -1; }
        if(a.text.toLowerCase() > b.text.toLowerCase()) {return 1; }
        return 0;
    });
}

export let timeConverter= UNIX_timestamp => {
    const a = new Date(UNIX_timestamp);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const time = date + ' ' + month + ' ' + year;
    return time;
}

export let rowColorCheck = x  => {
    const rowStyleRed = {
        backgroundColor: 'red',
        padding: '10px',
        border: '1px solid black'
    }
    const rowStyleYellow = {
        backgroundColor: 'yellow',
        padding: '10px',
        border: '1px solid black'
    }
    const rowStyleGreen = {
        backgroundColor: 'green',
        padding: '10px',
        border: '1px solid black'
    }
    let rowStyle = rowStyleGreen;
    const useBy = Math.trunc(Date.parse(x) / 86400000);
    const today = Math.trunc(Date.now() / 86400000); 

    if(useBy < today) {
        rowStyle = rowStyleRed;
        return rowStyle;
    } else if(useBy - today === 1 || useBy === today) {
        rowStyle = rowStyleYellow;
        return rowStyle;
    } else {
        return rowStyle;
    }
}