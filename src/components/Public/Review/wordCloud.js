import React , {Component}from 'react';
import reviewService from '../../../Services/Public/review.service';

export class Review extends Component 
{
    constructor(props) {
        super(props)

        this.state = {
            fileContent: ""
        }
    }

    handleSubmit = (event) => 
    {
        event.preventDefault();
        let data = {'text': "bread, butter, tomato, onion, coriander chutney"};
        console.log(this.state.fileContent);
        //reviewService        
    }

    render() {

        return ( 
        <html>
        <body>
            <img id="wordCloud" />
        </body>
        <script>
            fetch("https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud", {
            method: "POST",
            headers: {
                "x-rapidapi-host": "textvis-word-cloud-v1.p.rapidapi.com",
                "x-rapidapi-key": YOUR_API_KEY,
                "content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({
                text:
                "Star Wars is an American epic space opera franchise, centered on a film series created by George Lucas. It depicts the adventures of various characters a long time ago in a galaxy far, far away.  The franchise began in 1977 with the release of the film Star Wars subtitled Episode IV: A New Hope in 1981[2][3], which became a worldwide pop culture phenomenon. It was followed by the successful sequels The Empire Strikes Back 1980 and Return of the Jedi 1983; these three films constitute the original Star Wars trilogy. A prequel trilogy was released between 1999 and 2005, which received mixed reactions. A sequel trilogy began in 2015 with the release of Star Wars: The Force Awakens. All seven films were nominated for Academy Awards with wins going to the first two films and have been commercial successes, with a combined box office revenue of $7.075 billion,[4] making Star Wars the third highest-grossing film series.[5] Spin-off films include Star Wars: The Clone Wars 2008 and Rogue One 2016, which is the first in an upcoming series of anthology films.  The series has spawned an extensive media franchise—the Star Wars expanded universe—including books, television series, computer and video games, and comic books, resulting in significant development of the seriess fictional universe. Star Wars also holds a Guinness World Records title for the Most successful film merchandising franchise. In 2015, the total value of the Star Wars franchise was estimated at USD $41.9 billion,[6] making Star Wars the second highest-grossing media franchise of all time.  In 2012, The Walt Disney Company acquired Lucasfilm for $4.06 billion and earned the distribution rights to all subsequent Star Wars films, beginning with the release of The Force Awakens in 2015.[7] The former distributor, 20th Century Fox, retains the physical distribution rights to the first two Star Wars trilogies, owning permanent rights for the original 1977 film and holding the rights to Episodes I–III, V, and VI until May 2020.[8][9] Walt Disney Studios owns digital distribution rights to all the Star Wars films, excluding A New Hope.[9][10]  Star Wars galaxy redirects here. For the video game, see Star Wars Galaxies. For the comic series named Star Wars Galaxy, see Star Wars UK comics. See also: The Force Star Wars, List of Star Wars planets and moons, and Philosophy and religion in Star Wars The events depicted in the Star Wars franchise take place in an unnamed fictional galaxy at an undetermined point in the distant past. Many species of alien creatures often humanoid are depicted. Robotic droids are also commonplace and are generally built to serve their owners. Space travel is common, and many planets in the galaxy are members of a single galactic government. In the prequel trilogy, this is depicted in the form of the Galactic Republic; at the end of the prequel trilogy and throughout the original trilogy, this government is the Galactic Empire. Preceding and during the sequel trilogy, this government is the New Republic.  One of the prominent elements of Star Wars is the Force, an omnipresent energy that can be harnessed by those with that ability, known as Force-sensitives. It is described in the first produced film as an energy field created by all living things [that] surrounds us, penetrates us, [and] binds the galaxy together.[11] The Force allows users to perform various supernatural feats such as telekinesis, clairvoyance, precognition, and mind control and can amplify certain physical traits, such as speed and reflexes; these abilities vary between characters and can be improved through training. While the Force can be used for good, known as the light side, it also has a dark side that, when pursued, imbues users with hatred, aggression, and malevolence.  The films feature the Jedi, who adhere to the light side of the Force to serve as peacekeepers and guardians, and the Sith, who use the dark side of the Force for evil in an attempt to destroy the Jedi Order and the Republic and rule the galaxy for themselves. The sequel trilogy introduces the Knights of Ren, an order of practitioners of the dark side of the Force aligned with the First Order.  The first film in the series, Star Wars, was released on May 25, 1977. This was followed by two sequels: The Empire Strikes Back, released on May 21, 1980, and Return of the Jedi, released on May 25, 1983. The opening crawl of the sequels disclosed that they were numbered as Episode V and Episode VI respectively, though the films were generally advertised solely under their subtitles. Though the first film in the series was simply titled Star Wars, with its 1981 re-release it had the subtitle Episode IV: A New Hope added to remain consistent with its sequel, and to establish it as the middle chapter of a continuing saga.[12]  More than two decades after the release of the original film, the series continued with a prequel trilogy; consisting of Episode I: The Phantom Menace, released on May 19, 1999; Episode II: Attack of the Clones, released on May 16, 2002; and Episode III: Revenge of the Sith, released on May 19, 2005.[13] On August 15, 2008, the animated film Star Wars: The Clone Wars was released theatrically as a lead-in to the animated TV series with the same name.  A decade after the release of the final prequel film, the series continued again with Episode VII: The Force Awakens, released on December 18, 2015, beginning a new sequel trilogy. Rogue One: A Star Wars Story was released on December 16, 2016 as the first in an anthology series of films separate from the main episodic saga.  In 1971, Universal Studios agreed to make American Graffiti and Star Wars in a two-picture contract with George Lucas, although Star Wars was later rejected in its early concept stages. American Graffiti was completed in 1973 and, a few months later, Lucas wrote a short summary called The Journal of the Whills, which told the tale of the training of apprentice CJ Thorpe as a Jedi-Bendu space commando by the legendary Mace Windy.[25] Frustrated that his story was too difficult to understand, Lucas then began writing a 13-page treatment called The Star Wars on April 17, 1973, which had thematic parallels with Akira Kurosawas The Hidden Fortress.[26] By 1974, he had expanded the treatment into a rough draft screenplay, adding elements such as the Sith, the Death Star, and a protagonist named Annikin Starkiller.  The Galactic Empire is nearing completion of the Death Star, a space station with the power to destroy entire planets. Emperor Palpatine intends to use this deadly weapon to enforce his control over the galaxy and crush the Rebel Alliance, an organized resistance movement. Near the orbit of the desert planet Tatooine, a Rebel ship escorts a secret member of the rebellion, Princess Leia Organa, who intends to use stolen Death Star plans to help the rebellion find a way to destroy the space station. However, Leias ship is intercepted by the Emperors deadliest agent, Darth Vader, and his stormtroopers. Before being captured, Leia hides the Death Star plans inside the astromech droid R2-D2 along with a message for the legendary Jedi Knight Obi-Wan Kenobi. R2, along with the protocol droid C-3PO, escapes to Tatooine. The droids are found by Luke Skywalker, an orphan farm boy raised by his step-uncle and aunt. While cleaning R2, he accidentally triggers Leias message. Luke assists the droids in finding Obi-Wan, who has been living in exile on Tatooine as an old hermit called Ben Kenobi. Obi-Wan also tells Luke he knew Lukes father Anakin Skywalker, a great Jedi who was betrayed and murdered by Vader a Sith Lord who was Obi-Wans former Jedi apprentice, and he gives Luke his fathers lightsaber.[27] After viewing Leias message for assistance in delivering R2 to the rebellion, Obi-Wan and Luke hire the smuggler Han Solo and his Wookiee co-pilot Chewbacca to provide them transport aboard their space freighter, the Millennium Falcon.[11]  For the second draft, Lucas made heavy simplifications, and introduced the young hero on a farm as Luke Starkiller. Annikin became Lukes father, a wise Jedi knight. The Force was also introduced as a mystical energy field. The next draft removed the father character and replaced him with a substitute named Ben Kenobi. Later, he realized the film would not in fact be the first in the sequence, but a film in the second trilogy in the saga. The second draft contained a teaser for a never-made sequel about The Princess of Ondos, and by the time of the third draft some months later Lucas had negotiated a contract that gave him rights to make two sequels. Not long after, Lucas met with author Alan Dean Foster, and hired him to write these two sequels as novels.[28]  In 1976, a fourth draft had been prepared for principal photography. The film was titled Adventures of Luke Starkiller, as taken from the Journal of the Whills, Saga I: The Star Wars. During production, Lucas changed Lukes name to Skywalker and altered the title to simply The Star Wars and finally Star Wars.[29] At that point, Lucas was not expecting the film to become part of a series. The fourth draft of the script underwent subtle changes that made it more satisfying as a self-contained film, ending with the destruction of the Galactic Empire itself by way of destroying the Death Star. However, Lucas had previously conceived of the film as the first in a series of adventures. The intention was that if Star Wars was successful, Lucas could adapt the novels into screenplays.[30] He had also by that point developed an elaborate backstory to aid his writing process.[31]  When Star Wars proved successful, Lucas decided to use the film as the basis for an elaborate serial, although at one point he considered walking away from the series altogether.[32] However, Lucas wanted to create an independent filmmaking center—what would become Skywalker Ranch—and saw an opportunity to use the series as a financing agent.[33] Alan Dean Foster had already begun writing the first sequel novel, but Lucas decided to abandon his plan to adapt Fosters work; the book was released as Splinter of the Minds Eye the following year. At first, Lucas envisioned a series of films with no set number of entries, like the James Bond series. In an interview with Rolling Stone in August 1977, he said that he wanted his friends to each take a turn at directing the films and giving unique interpretations on the series. He also said that the backstory in which Darth Vader turns to the dark side, kills Lukes father and fights Obi-Wan Kenobi on a volcano as the Galactic Republic falls would make an excellent sequel.",
                scale: 1,
                width: 800,
                height: 800,
                colors: ["#375E97", "#FB6542", "#FFBB00", "#3F681C"],
                font: "Tahoma",
                use_stopwords: true,
                language: "en",
                uppercase: false
            })
            })
            .then(response => {
                return response.text();
            })
            .then(wordCloud => {
                var img = document.getElementById("wordCloud");
                img.src = wordCloud;
                img.height = 800;
                img.width = 800;
            })
            .catch(err => {
                console.log(err);
            });
        </script>
        </html> );
    }
}