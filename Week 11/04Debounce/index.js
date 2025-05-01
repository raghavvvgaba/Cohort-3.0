let currentclock;

function searchBackend(){
    console.log("request sent to backend");
    //fetch()
}

function debouncedSearchBackend(){
    clearTimeout(currentclock);
    currentclock = setTimeout(searchBackend, 30); //create a new clock and cancel the old clock   
}

debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
