import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { VideoComponent } from '../video/video.component';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-gestion-list',
  templateUrl: './gestion-list.component.html',
  styleUrls: ['./gestion-list.component.css'],
  providers : [CardComponent, VideoComponent]
})
export class GestionListComponent implements OnInit {
  test : VideoComponent = new VideoComponent(); // Juste pour le test
  videos : Movie[] = [];

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    console.log(this.getMovies()[0]);
  }

 
  // Juste à remplacer le type sting par un type carde ou video
  addVideo(video : Movie) {
    this.videos.push(video);
  }

  delVideo(video : Movie) {
    //delete this.videos.indexOf(video);
    var indice = this.videos.indexOf(video);
    console.log(indice);
    this.videos.splice(indice,1);
  }

  getMovies() {
    return  [
      {
        "adult": false,
        "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 634649,
        "original_language": "en",
        "original_title": "Spider-Man: No Way Home",
        "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        "popularity": 10594.413,
        "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        "release_date": "2021-12-15",
        "title": "Spider-Man: No Way Home",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 7616
      },
      {
        "adult": false,
        "backdrop_path": "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
        "genre_ids": [
          16,
          35,
          10751,
          14
        ],
        "id": 568124,
        "original_language": "en",
        "original_title": "Encanto",
        "overview": "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
        "popularity": 4413.945,
        "poster_path": "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
        "release_date": "2021-11-24",
        "title": "Encanto",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 4219
      },
      {
        "adult": false,
        "backdrop_path": "/eVSa4TpyXbOdk9fXSD6OcORJGtv.jpg",
        "genre_ids": [
          53
        ],
        "id": 803114,
        "original_language": "en",
        "original_title": "The Requin",
        "overview": "A couple on a romantic getaway find themselves stranded at sea when a tropical storm sweeps away their villa. In order to survive, they are forced to fight the elements, while sharks circle below.",
        "popularity": 3468.923,
        "poster_path": "/i0z8g2VRZP3dhVvvSMilbOZMKqR.jpg",
        "release_date": "2022-01-28",
        "title": "The Requin",
        "video": false,
        "vote_average": 4,
        "vote_count": 38
      },
      {
        "adult": false,
        "backdrop_path": "/8pgKccb5PfE1kWB9qqiXJem83VC.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 522016,
        "original_language": "en",
        "original_title": "The 355",
        "overview": "A group of top female agents from American, British, Chinese, Columbian and German  government agencies are drawn together to try and stop an organization from acquiring a deadly weapon to send the world into chaos.",
        "popularity": 2990.45,
        "poster_path": "/xef9Ht77B2igqZv754HNdW8qZCk.jpg",
        "release_date": "2022-01-05",
        "title": "The 355",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 200
      },
      {
        "adult": false,
        "backdrop_path": "/eG0oOQVsniPAuecPzDD1B1gnYWy.jpg",
        "genre_ids": [
          16,
          35,
          12,
          10751
        ],
        "id": 774825,
        "original_language": "en",
        "original_title": "The Ice Age Adventures of Buck Wild",
        "overview": "The fearless one-eyed weasel Buck teams up with mischievous possum brothers Crash & Eddie as they head off on a new adventure into Buck's home: The Dinosaur World.",
        "popularity": 3378.989,
        "poster_path": "/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg",
        "release_date": "2022-01-28",
        "title": "The Ice Age Adventures of Buck Wild",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 492
      },
      {
        "adult": false,
        "backdrop_path": "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
        "genre_ids": [
          28,
          12,
          14,
          878
        ],
        "id": 524434,
        "original_language": "en",
        "original_title": "Eternals",
        "overview": "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
        "popularity": 3340.578,
        "poster_path": "/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
        "release_date": "2021-11-03",
        "title": "Eternals",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 4218
      },
      {
        "adult": false,
        "backdrop_path": "/4rsomWxlqnHt3muGYK06auhOib6.jpg",
        "genre_ids": [
          10749,
          18
        ],
        "id": 818647,
        "original_language": "es",
        "original_title": "A través de mi ventana",
        "overview": "Raquel's longtime crush on her next-door neighbor turns into something more when he starts developing feelings for her, despite his family's objections.",
        "popularity": 2389.87,
        "poster_path": "/6gg7fvKc1ZxP9yCczweSxIGYp4S.jpg",
        "release_date": "2022-02-04",
        "title": "Through My Window",
        "video": false,
        "vote_average": 8,
        "vote_count": 927
      },
      {
        "adult": false,
        "backdrop_path": "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
        "genre_ids": [
          16,
          10751,
          14,
          35,
          12
        ],
        "id": 585083,
        "original_language": "en",
        "original_title": "Hotel Transylvania: Transformania",
        "overview": "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
        "popularity": 2966.124,
        "poster_path": "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
        "release_date": "2022-01-13",
        "title": "Hotel Transylvania: Transformania",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 1670
      },
      {
        "adult": false,
        "backdrop_path": "/dK12GIdhGP6NPGFssK2Fh265jyr.jpg",
        "genre_ids": [
          28,
          35,
          80,
          53
        ],
        "id": 512195,
        "original_language": "en",
        "original_title": "Red Notice",
        "overview": "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
        "popularity": 1944.449,
        "poster_path": "/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg",
        "release_date": "2021-11-04",
        "title": "Red Notice",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 2978
      },
      {
        "adult": false,
        "backdrop_path": "/EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg",
        "genre_ids": [
          14,
          35,
          12
        ],
        "id": 425909,
        "original_language": "en",
        "original_title": "Ghostbusters: Afterlife",
        "overview": "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
        "popularity": 2105.587,
        "poster_path": "/sg4xJaufDiQl7caFEskBtQXfD4x.jpg",
        "release_date": "2021-11-11",
        "title": "Ghostbusters: Afterlife",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 1934
      },
      {
        "adult": false,
        "backdrop_path": "/xHRabofjmMGoIV3mb6xgy4nwOcS.jpg",
        "genre_ids": [
          27
        ],
        "id": 801071,
        "original_language": "en",
        "original_title": "The Jack in the Box: Awakening",
        "overview": "When a vintage Jack-in-the-box is opened by a dying woman, she enters into a deal with the demon within that would see her illness cured in return for helping it claim six innocent victims.",
        "popularity": 2161.72,
        "poster_path": "/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg",
        "release_date": "2022-01-03",
        "title": "The Jack in the Box: Awakening",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 29
      },
      {
        "adult": false,
        "backdrop_path": "/oQPbZ5e6J9fuAyv4Gl0mMZMIyPI.jpg",
        "genre_ids": [
          28,
          12,
          53,
          10752
        ],
        "id": 476669,
        "original_language": "en",
        "original_title": "The King's Man",
        "overview": "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
        "popularity": 1808.069,
        "poster_path": "/nj5HmHRZsrYQEYYXyAusFv35erP.jpg",
        "release_date": "2021-12-22",
        "title": "The King's Man",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 746
      },
      {
        "adult": false,
        "backdrop_path": "/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg",
        "genre_ids": [
          35,
          16,
          10751,
          10402
        ],
        "id": 438695,
        "original_language": "en",
        "original_title": "Sing 2",
        "overview": "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
        "popularity": 2183.489,
        "poster_path": "/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
        "release_date": "2021-12-01",
        "title": "Sing 2",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1803
      },
      {
        "adult": false,
        "backdrop_path": "/p3ajeXwrCczDh8eYsT8ryTvvfwm.jpg",
        "genre_ids": [
          28,
          53,
          80,
          18
        ],
        "id": 766907,
        "original_language": "en",
        "original_title": "American Siege",
        "overview": "An ex-NYPD officer-turned-sheriff of a small rural Georgia town has to contend with a gang of thieves who have taken a wealthy doctor hostage.",
        "popularity": 1931.32,
        "poster_path": "/daeVrgyj0ue8qb3AHyU3UeCwoZz.jpg",
        "release_date": "2022-01-07",
        "title": "American Siege",
        "video": false,
        "vote_average": 5.1,
        "vote_count": 26
      },
      {
        "adult": false,
        "backdrop_path": "/t4To8feUSysyBs4tlBAbXIrKlCv.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 860623,
        "original_language": "en",
        "original_title": "Last Man Down",
        "overview": "After civilization succumbs to a deadly pandemic and his wife is murdered, a special forces soldier abandons his duty and becomes a hermit in the Nordic wilderness. Years later, a wounded woman appears on his doorstep. She's escaped from a lab and her pursuers believe her blood is the key to a worldwide cure. He's hesitant to get involved, but all doubts are cast aside when he discovers her pursuer is none other than Commander Stone, the man that murdered his wife some years ago.",
        "popularity": 1657.937,
        "poster_path": "/4B7liCxNCZIZGONmAMkCnxVlZQV.jpg",
        "release_date": "2021-10-19",
        "title": "Last Man Down",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 226
      },
      {
        "adult": false,
        "backdrop_path": "/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
        "genre_ids": [
          878,
          28,
          12
        ],
        "id": 580489,
        "original_language": "en",
        "original_title": "Venom: Let There Be Carnage",
        "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        "popularity": 1745.977,
        "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        "release_date": "2021-09-30",
        "title": "Venom: Let There Be Carnage",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 6266
      },
      {
        "adult": false,
        "backdrop_path": "/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg",
        "genre_ids": [
          878,
          28,
          12
        ],
        "id": 624860,
        "original_language": "en",
        "original_title": "The Matrix Resurrections",
        "overview": "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
        "popularity": 1724.776,
        "poster_path": "/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
        "release_date": "2021-12-16",
        "title": "The Matrix Resurrections",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 2867
      },
      {
        "adult": false,
        "backdrop_path": "/o76ZDm8PS9791XiuieNB93UZcRV.jpg",
        "genre_ids": [
          27,
          28,
          878
        ],
        "id": 460458,
        "original_language": "en",
        "original_title": "Resident Evil: Welcome to Raccoon City",
        "overview": "Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.",
        "popularity": 1626.802,
        "poster_path": "/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg",
        "release_date": "2021-11-24",
        "title": "Resident Evil: Welcome to Raccoon City",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 1173
      },
      {
        "adult": false,
        "backdrop_path": "/srJ7haOhfykoPOYPQrstOaFem08.jpg",
        "genre_ids": [
          28
        ],
        "id": 811592,
        "original_language": "en",
        "original_title": "One Shot",
        "overview": "An elite squad of Navy SEALs, on a covert mission to transport a prisoner off a CIA black site island prison, are trapped when insurgents attack while trying to rescue the same prisoner.",
        "popularity": 1717.509,
        "poster_path": "/3OXiTjU30gWtqxmx4BU9RVp2OTv.jpg",
        "release_date": "2021-11-05",
        "title": "One Shot",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 244
      },
      {
        "adult": false,
        "backdrop_path": "/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
        "genre_ids": [
          16,
          28,
          12,
          14
        ],
        "id": 635302,
        "original_language": "ja",
        "original_title": "劇場版「鬼滅の刃」無限列車編",
        "overview": "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
        "popularity": 1367.997,
        "poster_path": "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
        "release_date": "2020-10-16",
        "title": "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 2133
      }
      ]
  //   this.movieService.getVideos().subscribe(res => {
  //     console.log(res.);
  //     this.videos = res as Movie[];
  // });
//   this.movieService.getVideos().subscribe(res => {
//     const response= res as Object;
//     console.log(response["results"]); 
// });
  }

  //TODO trier les vidéos en fonction de leur genre
  trierVideo(gerne : String) {

  }

}

