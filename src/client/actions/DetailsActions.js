import fetch from 'isomorphic-fetch';

export const REQUEST_DETAILS = 'REQUEST_DETAILS';
export const RECEIVE_DETAILS = 'RECEIVE_DETAILS';

export const requestDetails = id => ({
  type: REQUEST_DETAILS,
  id,
});

export const receiveDetails = (id, json) => ({
  type: RECEIVE_DETAILS,
  id,
  json,
  details: json,
});

export const hardCodedDetails = id => ({
  type: RECEIVE_DETAILS,
  details: {'Arrival': {
   "Title":"Arrival",
   "Year":"2016",
   "Rated":"PG-13",
   "Released":"11 Nov 2016",
   "Runtime":"116 min",
   "Genre":"Drama, Mystery, Sci-Fi",
   "Director":"Denis Villeneuve",
   "Writer":"Eric Heisserer (screenplay), Ted Chiang (based on the story \"Story of Your Life\" written by)",
   "Actors":"Amy Adams, Jeremy Renner, Forest Whitaker, Michael Stuhlbarg",
   "Plot":"When 12 mysterious spacecraft appear around the world, linguistics professor Louise Banks is tasked with interpreting the language of the apparent alien visitors.",
   "Language":"English, Russian, Mandarin",
   "Country":"USA",
   "Awards":"Nominated for 2 Golden Globes. Another 28 wins & 150 nominations.",
   "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg",
   "Metascore":"81",
   "imdbRating":"8.3",
   "imdbVotes":"113,438",
   "imdbID":"tt2543164",
   "Type":"movie",
   "Response":"True"}, 
   'Moonlight': {"Title":"Moonlight","Year":"2016","Rated":"R","Released":"18 Nov 2016","Runtime":"111 min","Genre":"Drama","Director":"Barry Jenkins","Writer":"Barry Jenkins (screenplay), Tarell Alvin McCraney (story by)","Actors":"Mahershala Ali, Shariff Earp, Duan Sanderson, Alex R. Hibbert","Plot":"A timeless story of human self-discovery and connection, Moonlight chronicles the life of a young black man from childhood to adulthood as he struggles to find his place in the world while growing up in a rough neighborhood of Miami.","Language":"English","Country":"USA","Awards":"Nominated for 6 Golden Globes. Another 131 wins & 202 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SX300.jpg","Metascore":"99","imdbRating":"8.7","imdbVotes":"9,183","imdbID":"tt4975722","Type":"movie","Response":"True"},
   'Manchester by the Sea': {"Title":"Manchester by the Sea","Year":"2016","Rated":"R","Released":"16 Dec 2016","Runtime":"137 min","Genre":"Drama","Director":"Kenneth Lonergan","Writer":"Kenneth Lonergan","Actors":"Casey Affleck, Ben O'Brien, Kyle Chandler, Richard Donelly","Plot":"An uncle is asked to take care of his teenage nephew after the boy's father dies.","Language":"English","Country":"USA","Awards":"Won 1 Golden Globe. Another 93 wins & 195 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SX300.jpg","Metascore":"96","imdbRating":"8.4","imdbVotes":"21,582","imdbID":"tt4034228","Type":"movie","Response":"True"},
  'Lion': {"Title":"Lion","Year":"2016","Rated":"PG-13","Released":"06 Jan 2017","Runtime":"118 min","Genre":"Drama","Director":"Garth Davis","Writer":"Saroo Brierley (adapted from the book \"A Long Way Home\" by), Luke Davies (screenplay)","Actors":"Sunny Pawar, Abhishek Bharate, Priyanka Bose, Khushi Solanki","Plot":"A five-year-old Indian boy gets lost on the streets of Calcutta, thousands of kilometers from home. He survives many challenges before being adopted by a couple in Australia; 25 years later, he sets out to find his lost family.","Language":"English, Bengali, Hindi","Country":"Australia, USA","Awards":"Nominated for 4 Golden Globes. Another 22 wins & 57 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjkzNjg2MF5BMl5BanBnXkFtZTgwMDkyMzgzMDI@._V1_SX300.jpg","Metascore":"69","imdbRating":"8.0","imdbVotes":"8,130","imdbID":"tt3741834","Type":"movie","Response":"True"},
  'La La Land': {"Title":"La La Land","Year":"2016","Rated":"PG-13","Released":"25 Dec 2016","Runtime":"128 min","Genre":"Comedy, Drama, Musical","Director":"Damien Chazelle","Writer":"Damien Chazelle","Actors":"Ryan Gosling, Emma Stone, Amiee Conn, Terry Walters","Plot":"A jazz pianist falls for an aspiring actress in Los Angeles.","Language":"English","Country":"USA","Awards":"Won 7 Golden Globes. Another 127 wins & 182 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg","Metascore":"93","imdbRating":"8.8","imdbVotes":"67,794","imdbID":"tt3783958","Type":"movie","Response":"True"},
 'Hidden Figures': {"Title":"Hidden Figures","Year":"2016","Rated":"PG","Released":"06 Jan 2017","Runtime":"127 min","Genre":"Biography, Drama, History","Director":"Theodore Melfi","Writer":"Allison Schroeder (screenplay), Theodore Melfi (screenplay), Margot Lee Shetterly (based on the book by)","Actors":"Taraji P. Henson, Octavia Spencer, Janelle Monáe, Kevin Costner","Plot":"Based on a true story. A team of African-American women provide NASA with important mathematical data needed to launch the program's first successful space missions.","Language":"English","Country":"USA","Awards":"Nominated for 3 Oscars. Another 22 wins & 61 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxOTkxODUyN15BMl5BanBnXkFtZTgwNTU3NTM3OTE@._V1_SX300.jpg","Metascore":"74","imdbRating":"8.0","imdbVotes":"13,169","imdbID":"tt4846340","Type":"movie","Response":"True"},
  'Hell or High Water': {"Title":"Hell or High Water","Year":"2016","Rated":"R","Released":"26 Aug 2016","Runtime":"102 min","Genre":"Crime, Drama, Western","Director":"David Mackenzie","Writer":"Taylor Sheridan","Actors":"Dale Dickey, Ben Foster, Chris Pine, William Sterchi","Plot":"A divorced father and his ex-con older brother resort to a desperate scheme in order to save their family's ranch in West Texas.","Language":"English","Country":"USA","Awards":"Nominated for 3 Golden Globes. Another 34 wins & 126 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4NDA1OTA5NF5BMl5BanBnXkFtZTgwMDQ2MDM5ODE@._V1_SX300.jpg","Metascore":"88","imdbRating":"7.7","imdbVotes":"62,196","imdbID":"tt2582782","Type":"movie","Response":"True"},
  'Hacksaw Ridge': {"Title":"Hacksaw Ridge","Year":"2016","Rated":"R","Released":"04 Nov 2016","Runtime":"139 min","Genre":"Drama, History, War","Director":"Mel Gibson","Writer":"Robert Schenkkan (screenplay), Andrew Knight (screenplay)","Actors":"Andrew Garfield, Richard Pyros, Jacob Warner, Milo Gibson","Plot":"WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.","Language":"English, Japanese","Country":"Australia, USA","Awards":"Nominated for 6 Oscars. Another 36 wins & 73 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SX300.jpg","Metascore":"71","imdbRating":"8.4","imdbVotes":"74,669","imdbID":"tt2119532","Type":"movie","Response":"True"},
  'Fences': {"Title":"Fences","Year":"2016","Rated":"PG-13","Released":"25 Dec 2016","Runtime":"139 min","Genre":"Drama","Director":"Denzel Washington","Writer":"August Wilson (screenplay), August Wilson (based upon his play \"Fences\")","Actors":"Denzel Washington, Viola Davis, Stephen Henderson, Jovan Adepo","Plot":"A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.","Language":"English","Country":"USA","Awards":"Nominated for 4 Oscars. Another 39 wins & 92 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTg0Nzc1NjA0MV5BMl5BanBnXkFtZTgwNTcyNDQ0MDI@._V1_SX300.jpg","Metascore":"78","imdbRating":"7.6","imdbVotes":"13,137","imdbID":"tt2671706","Type":"movie","Response":"True"}
   }[id],
});


export function fetchDetails(id) {
  return (dispatch) => {
    dispatch(requestDetails(id));
    return fetch(`https://www.omdbapi.com/?t=${id}&y=2016&plot=short&r=json`)
      .then(response => response.json())
      .then(json => dispatch(receiveDetails(id, json)));
  };
}

export function connectLiveStax() {
  return (dispatch) => {
    Livestax.store.watch('best-picture-nominations.selection', (movie => dispatch(hardCodedDetails(movie))));
  };
}
