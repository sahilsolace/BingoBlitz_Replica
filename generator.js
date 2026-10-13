/**
 * Bingo Blitz - Bingo Card Generator
 * Fully featured client-side replica and interactive engine
 */

(function ($) {
  'use strict';

  // --- DATA PRESETS ---
  const TEMPLATES_LIST = [
  {
    "name": "Bingo Card Generator",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/bingo_blitz_icon.png",
    "href": "https://www.bingoblitz.com/bingo-card-generator/",
    "url": "bingo-card-generator",
    "heading": "Bingo Card Generator",
    "description": "Create unique Bingo Cards to print or play with online with this free Bingo Card Generator! Choose from 3 different sizes, many artistic themes, and name your card.",
    "cardName": "Untitled",
    "presetWords": "",
    "bottomH1": "",
    "bottomMainText": "",
    "bottomH2": "",
    "bottomSecondaryText": ""
  },
  {
    "name": "Christmas Bingo Card",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/christmas_icon.png",
    "href": "https://www.bingoblitz.com/generator/christmas-bingo/",
    "url": "generator/christmas-bingo",
    "heading": "Christmas Bingo Card Template",
    "description": "Easily create custom Christmas Bingo cards with our free online generator. Perfect for holiday parties, classrooms, and family gatherings. Print and play instantly!",
    "cardName": "Christmas Bingo",
    "presetWords": "Santa, Reindeer, Elf, Sleigh, Snowman, Gifts, Stocking, Tree, Lights, Ornaments, Chimney, Cookies, Carol, Bells, Wreath, Fireplace, Candy cane, Snowflake, Mistletoe, North Pole, Rudolph, Eggnog, Wrapping, Gingerbread, Holiday",
    "bottomH1": "Festive Fun: Christmas Bingo",
    "bottomMainText": "&lt;p&gt;Get ready to celebrate the holidays with a joyful twist! Our Christmas Bingo Card Template Generator lets you instantly create personalized bingo cards filled with festive cheer. Whether you’re organizing a Christmas party, classroom activity, or family gathering, our tool helps you design unique Christmas bingo cards in just a few clicks. Add holiday icons, festive words, or winter-themed designs to make every game merry and bright.&lt;br /&gt;\nWith fully customizable templates, you can print your Christmas bingo cards or play online. Enjoy a hassle-free setup and bring everyone together for some cozy, laughter-filled holiday fun!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Christmas Bingo Cards",
    "bottomSecondaryText": "&lt;p&gt;Our Christmas Bingo Generator is designed for simplicity and festive spirit. Instead of icons or layouts, you can personalize your cards by adding custom words that match your holiday traditions and party theme. Choose from pre-made word lists or create your own for a truly unique experience.&lt;br /&gt;\nFrom classic Christmas terms to fun, modern phrases, you can craft bingo cards that fit any celebration. Whether it’s an in-person party or a virtual game night, our word-based templates make every moment magical.&lt;/p&gt;\n&lt;p&gt;Start now and make your Christmas celebration unforgettable &#8211; because every square is a reason to smile!&lt;/p&gt;\n"
  },
  {
    "name": "Human Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/human_bingo_icon.png",
    "href": "https://www.bingoblitz.com/generator/human-bingo/",
    "url": "generator/human-bingo",
    "heading": "Human Bingo Card Template",
    "description": "Create personalized Human Bingo cards in seconds with our free generator. Great icebreaker for classrooms, team building, and parties. Print and play instantly!",
    "cardName": "Human Bingo",
    "presetWords": "Has a pet, Can play an instrument, Speaks two languages, Has traveled abroad, Loves chocolate, Is left-handed, Has a tattoo, Can whistle, Likes pineapple on pizza, Has siblings, Is an only child, Plays video games, Is a night owl, Can dance, Loves spicy food, Doesn’t drink coffee, Has a birthday in winter, Is vegetarian, Loves to read, Is afraid of heights, Has met a celebrity, Knows how to swim, Has run a marathon, Wears glasses, Has a unique hobby",
    "bottomH1": "Create Fun Human Bingo Cards",
    "bottomMainText": "&lt;p&gt;Make your meetings, classes, or events more interactive with our Human Bingo Card Template Generator. This easy online tool lets you design personalized Human Bingo cards with fun facts, experiences, and traits like “has a pet”, “likes coffee” or “speaks another language” It’s a simple way to promote communication and engagement in any group.&lt;br /&gt;\nPrint your Human Bingo cards or share them digitally &#8211; perfect for schools, workshops, company events, and community activities. Build connections and add some fun to any occasion with customizable bingo templates.&lt;/p&gt;\n",
    "bottomH2": "Customize Your Human Bingo Card",
    "bottomSecondaryText": "&lt;p&gt;With Bingo Blitz, creating your own Human Bingo templates is quick, flexible, and fully customizable. Choose from ready-made question sets or create your own to match your group’s interests. Our Human Bingo Card Generator helps teachers, managers, and event organizers make sessions more dynamic and enjoyable.&lt;br /&gt;\nWhether for classrooms, offices, or social events, design engaging Human Bingo cards in just a few clicks. Start now and bring people together with Bingo Blitz.&lt;/p&gt;\n"
  },
  {
    "name": "Get To Know You Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/get_to_know_icon.png",
    "href": "https://www.bingoblitz.com/generator/get-to-know-you-bingo/",
    "url": "generator/get-to-know-you-bingo",
    "heading": "Get To Know You Bingo Card Template",
    "description": "Quickly generate custom Get To Know You Bingo cards for icebreakers, team building, and social events. Fun, printable, and ready to play in minutes",
    "cardName": "Get To Know You Bingo",
    "presetWords": "Favorite color, Favorite movie, First job, Dream vacation, Favorite food, Hometown, Siblings, Pet&#039;s name, Middle name, Birthday month, Favorite sport, Favorite book, Zodiac sign, Coffee or tea, Morning or night person, Favorite TV show, Favorite season, Allergies, Favorite music genre, Shoe size, Nickname, Favorite hobby, Hidden talent, Childhood dream, Fear",
    "bottomH1": "Fun Connections: Get To Know You Bingo",
    "bottomMainText": "&lt;p&gt;Break the ice and make introductions exciting with our Get To Know You Bingo Card Template Generator! Whether you’re hosting a team-building session, classroom activity, or social event, this fun tool helps everyone connect through laughter and conversation.&lt;br /&gt;\nCustomize your bingo cards with engaging prompts like “Favorite sport”, “Coffee or tea” or “Zodiac sign” to spark interesting discussions and friendly competition. In just a few clicks, you’ll create the perfect icebreaker for any group setting.&lt;br /&gt;\nWith printable and online options, it’s easy to play anywhere &#8211; ideal for students, coworkers, or new friends. Turn awkward introductions into a fun, relaxed way to get to know each other!&lt;/p&gt;\n",
    "bottomH2": "",
    "bottomSecondaryText": ""
  },
  {
    "name": "Baby Shower Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/baby_shower_icon.png",
    "href": "https://www.bingoblitz.com/generator/baby-shower-bingo/",
    "url": "generator/baby-shower-bingo",
    "heading": "Baby Shower Bingo Card Template",
    "description": "Create adorable Baby Shower Bingo cards with our free online generator. Perfect for celebrating moms-to-be with fun, printable games everyone will enjoy!",
    "cardName": "Baby Shower Bingo",
    "presetWords": "Diaper, Bottle, Crib, Pacifier, Stroller, Bib, Onesie, Blanket, Baby wipes, Rattle, Formula, Teething ring, Booties, Car seat, Lullaby, Swaddle, Burp cloth, Nursery, Mobile, Toy, Baby food, Changing table, Sleeper, Rocking chair, Growth chart",
    "bottomH1": "Celebrate Joy: Baby Shower Bingo",
    "bottomMainText": "&lt;p&gt;Make your baby shower extra special with our Baby Shower Bingo Card Template Generator! Whether you’re planning a sweet celebration for a baby boy, girl, or keeping it gender-neutral, our tool helps you create adorable bingo cards that add fun and excitement to your event.&lt;br /&gt;\nInclude cute baby-themed words like “pacifier”, “diaper”, “baby bottle” and “stroller” or personalize your cards with inside jokes and unique themes that match your shower decor. With just a few clicks, you can design charming bingo cards that keep guests entertained from start to finish.&lt;br /&gt;\nChoose to print your bingo cards or play online &#8211; perfect for guests of all ages. Turn your baby shower into a joyful, laughter-filled celebration everyone will remember!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Baby Shower Bingo",
    "bottomSecondaryText": "&lt;p&gt;Our Baby Shower Bingo Generator makes it easy to design one-of-a-kind cards that match your party theme and style. Select from pre-made word lists or create your own with custom phrases to suit your celebration.&lt;br /&gt;\nFrom classic baby essentials to personalized prompts, you can craft bingo cards that fit your vision perfectly. Whether it’s an in-person party or a virtual shower, our customizable word-based templates bring smiles and playful energy to every moment.&lt;br /&gt;\nStart now and make your baby shower as fun and memorable as welcoming your little one!&lt;/p&gt;\n"
  },
  {
    "name": "Music Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/music_icon.png",
    "href": "https://www.bingoblitz.com/generator/music-bingo/",
    "url": "generator/music-bingo",
    "heading": "Music Bingo Card Template",
    "description": "Generate custom Music Bingo cards instantly with our free template. Great for parties, classrooms, or music-themed events. Easy to print and play!",
    "cardName": "Music Bingo",
    "presetWords": "Guitar, Piano, Drums, Violin, Microphone, Stage, Song, Chorus, Beat, Lyrics, Headphones, Concert, Band, DJ, Bass, Melody, Album, Playlist, Tune, Rap, Opera, Jazz, Pop, Rock, Symphony",
    "bottomH1": "Feel the Beat: Music Bingo",
    "bottomMainText": "&lt;p&gt;Bingo&lt;br /&gt;\nTurn up the volume and get ready for a game that rocks with our Music Bingo Card Template Generator! Whether you’re hosting a party, team event, classroom activity, or music night, this tool helps you create exciting bingo cards that bring rhythm and fun to any occasion.&lt;br /&gt;\nFill your bingo squares with song titles, artists, lyrics, or music genres &#8211; perfect for pop fans, rock lovers, or anyone who enjoys a great tune. In just a few clicks, you can design unique bingo cards that make every round a sing-along hit!&lt;br /&gt;\nPrint your cards or play online &#8211; ideal for music lovers of all ages. Bring people together with laughter, nostalgia, and a shared love of songs that make everyone tap their toes!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Music Bingo Cards",
    "bottomSecondaryText": "&lt;p&gt;Our Music Bingo Generator makes it easy to create playlists of fun and friendly competition. Simply add your favorite music-related words &#8211; like song titles, artists, genres, or instruments &#8211; to design unique bingo cards that fit your event’s vibe.&lt;br /&gt;\nPersonalize your cards with creative prompts to make every game stand out. Whether it’s for a party, classroom, or virtual event, our customizable templates turn any gathering into a lively music celebration.&lt;br /&gt;\nStart now and let your next event hit all the right notes with custom Music Bingo cards!&lt;/p&gt;\n"
  },
  {
    "name": "Halloween Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/halloween_bingo.png",
    "href": "https://www.bingoblitz.com/generator/halloween-bingo/",
    "url": "generator/halloween-bingo",
    "heading": "Halloween Bingo Card Template",
    "description": "Create your own Halloween Bingo! Free bingo card template generator with spooky themes – pumpkins, ghosts, witches, and more. Download and print unique cards for fun.\n",
    "cardName": "Halloween Bingo",
    "presetWords": "Pumpkin, Trick or treat, Ghost, Bat, Witch, Broomstick, Witch hat, Cauldron, Scarecrow, Spider, Spiderweb, Skeleton, Coffin, Zombie, Vampire, Werewolf, Monster, Full moon, Black cat, Haunted house, Tombstone, Candle, Masquerade, Costume",
    "bottomH1": "Spooky Fun: Halloween Bingo",
    "bottomMainText": "&lt;p&gt;Get ready for a frightfully fun game with our Halloween Bingo Card Template Generator! Whether you’re hosting a classroom party, family gathering, or Halloween event, this tool helps you create bingo cards full of spooky cheer and creepy delights.&lt;br /&gt;\nFill your bingo squares with Halloween-themed words like “pumpkin”, “ghost”, “witch” or “candy” or personalize your cards with fun twists and inside jokes. In just a few clicks, you’ll design unique bingo cards that keep everyone entertained from start to finish.&lt;br /&gt;\nPrint your cards or play online perfect for kids, adults, or a mixed group. Bring spooky laughter and festive fun to your Halloween celebration!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Halloween Bingo Cards",
    "bottomSecondaryText": "&lt;p&gt;Our Halloween Bingo Generator makes it easy to create cards that match your spooky theme. Simply choose your words for each square to make every card unique and engaging.&lt;br /&gt;\nWhether it’s a classroom, party, or virtual event, our word-based bingo templates turn any Halloween gathering into a fun and memorable experience.&lt;br /&gt;\nStart now and make your Halloween party a boo-tiful hit with custom Halloween Bingo cards!&lt;/p&gt;\n"
  },
  {
    "name": "Road Trip Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/road_icon.png",
    "href": "https://www.bingoblitz.com/generator/road-trip-bingo/",
    "url": "generator/road-trip-bingo",
    "heading": "Road Trip Bingo Card Template",
    "description": "Make travel fun with our free Road Trip Bingo card generator! Perfect for kids and families on the go - customize, print, and play on your next adventure.",
    "cardName": "Road Trip Bingo",
    "presetWords": "Gas station, Motel, Map, Snacks, Sunglasses, Playlist, Rest stop, Toll booth, Suitcase, Exit sign, Speed limit, Truck, License plate, Camper, Fast food, Scenic view, Detour, Car games, GPS, Air freshener, Car charger, Traffic, Mountains, Road sign, Souvenir",
    "bottomH1": "Adventure Awaits: Road Trip Bingo",
    "bottomMainText": "&lt;p&gt;Make your next journey even more fun with our Road Trip Bingo Card Template Generator! Perfect for family vacations, carpool trips, or long drives with friends, this tool helps you create engaging bingo cards that turn travel time into a game.&lt;br /&gt;\nFill your bingo squares with road trip-themed words like “gas station”, “stop sign”, “mountains” or “wildlife” or add your own ideas to match your route. In just a few clicks, you’ll design unique bingo cards that keep passengers entertained from start to finish.&lt;br /&gt;\nPrint your cards or play online &#8211; ideal for kids, teens, or adults. Turn every mile into laughter, conversation, and a fun-filled adventure!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Road Trip Bingo Cards",
    "bottomSecondaryText": "&lt;p&gt;Our Road Trip Bingo Generator makes it easy to create cards that fit your journey. Simply choose your words for each square to make every card unique and engaging.&lt;br /&gt;\nWhether it’s a short drive or a cross-country trip, our word-based bingo templates turn any road trip into a memorable and playful experience.&lt;br /&gt;\nStart now and make your travel time fly by with custom Road Trip Bingo cards!&lt;/p&gt;\n"
  },
  {
    "name": "Thanksgiving Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/thanksgiving_icon.png",
    "href": "https://www.bingoblitz.com/generator/thanksgiving-bingo/",
    "url": "generator/thanksgiving-bingo",
    "heading": "Thanksgiving Bingo Card Template",
    "description": "Celebrate the holiday with our free Thanksgiving Bingo card generator! Perfect for family gatherings, classrooms, and festive fun. Customize, print, and play instantly.",
    "cardName": "Thanksgiving Bingo",
    "presetWords": "Turkey, Pumpkin pie, Stuffing, Gravy, Cranberries, Feast, Family, Corn, Pilgrims, Parade, Football, November, Harvest, Gratitude, Blessing, Potatoes, Table, Leaf, Autumn, Thankful, Recipe, Tradition, Dessert, Nap, Cornucopia",
    "bottomH1": "Give Thanks: Thanksgiving Bingo",
    "bottomMainText": "&lt;p&gt;Make your Thanksgiving gathering extra fun with our Thanksgiving Bingo Card Template Generator! Perfect for family dinners, classroom activities, or friendsgiving events, this tool helps you create bingo cards filled with festive holiday words.&lt;br /&gt;\nFill your bingo squares with Thanksgiving-themed words like “turkey”, “pumpkin pie”, “cranberries” or “family gathering” or add your own ideas to match your celebration. In just a few clicks, you’ll design unique bingo cards that keep everyone entertained from start to finish.&lt;br /&gt;\nPrint your cards or play online &#8211; fun for kids, adults, or mixed-age groups. Turn your Thanksgiving celebration into a laughter-filled, interactive holiday experience!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Thanksgiving Bingo Cards",
    "bottomSecondaryText": "&lt;p&gt;Our Thanksgiving Bingo Generator makes it easy to create cards that fit your holiday theme. Simply choose your words for each square to make every card unique and engaging.&lt;br /&gt;\nWhether it’s a classroom, family dinner, or friendsgiving party, our word-based bingo templates help make your Thanksgiving gathering memorable and full of festive fun.&lt;br /&gt;\nStart now and make your holiday celebration even more delightful with custom Thanksgiving Bingo cards!&lt;/p&gt;\n"
  },
  {
    "name": "Anime Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/anime_icon.png",
    "href": "https://www.bingoblitz.com/generator/anime-bingo/",
    "url": "generator/anime-bingo",
    "heading": "Anime Bingo Card Template",
    "description": "Create custom Anime Bingo cards with our free generator—perfect for conventions, watch parties, or anime club games. Print and play your favorite anime themes!",
    "cardName": "Anime Bingo",
    "presetWords": "Naruto, Sasuke, Sakura, Jutsu, Ramen, Sword, Demon, Titan, Power, Transformation, Hero, Villain, School, Sensei, Magic, Manga, Kawaii, Mecha, Otaku, Cosplay, Spirit, Battle, Arc, Fantasy, Portal",
    "bottomH1": "Unleash the Fun: Anime Bingo Card Generator",
    "bottomMainText": "&lt;p&gt;Bring your anime watch party, convention, or fan meetup to life with our Anime Bingo Card Template Generator! Whether you’re celebrating your favorite shōnen heroes, indulging in slice-of-life charm, or diving into epic fantasy worlds, our tool helps you create exciting bingo cards that anime fans will love.&lt;br /&gt;\nFill your cards with iconic anime-themed words like “kawaii”, “power-up”, “tsundere” and “plot twist” &#8211; or personalize them with inside jokes, character names, and references from your favorite series. With just a few clicks, you can design vibrant bingo cards that turn any anime-themed event into an unforgettable experience.&lt;br /&gt;\nChoose to print your bingo cards or play online &#8211; perfect for conventions, streaming parties, or virtual gatherings. Make every moment interactive and fun for fans of all ages!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Anime Bingo Card",
    "bottomSecondaryText": "&lt;p&gt;Our Anime Bingo Generator makes it easy to design cards that match your fandom and style. Select from pre-made word lists or create your own with custom phrases to suit your favorite genres—whether it’s action-packed shōnen, heartwarming shōjo, or quirky slice-of-life.&lt;br /&gt;\nFrom classic anime tropes to personalized references, you can craft bingo cards that fit your vision perfectly. Whether you’re hosting an in-person event or an online watch party, our customizable word-based templates bring energy and excitement to every scene.&lt;br /&gt;\nStart now and make your anime celebration as epic as your favorite series!&lt;/p&gt;\n"
  },
  {
    "name": "Ice Breaker Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/ice_icon.png",
    "href": "https://www.bingoblitz.com/generator/ice-breaker-bingo/",
    "url": "generator/ice-breaker-bingo",
    "heading": "Ice Breaker Bingo Card Template",
    "description": "Easily create Ice Breaker Bingo cards with our free template - perfect for team building, classrooms, orientations, and networking events. Print and play instantly!",
    "cardName": "Ice Breaker Bingo",
    "presetWords": "Favorite food, Has traveled abroad, Speaks more than one language, Birthday in the same month, Likes pineapple on pizza, Plays an instrument, Loves animals, Watches anime, Loves coffee, Introvert, Extrovert, Reads books, Can cook, Has siblings, From a different city, Has a tattoo, Watches Netflix, Can dance, Hates spiders, Enjoys hiking, Has a hidden talent, Has met a celebrity, Wears glasses, Likes spicy food, Loves to draw",
    "bottomH1": "Break the Ice: Ice Breaker Bingo Card Generator",
    "bottomMainText": "&lt;p&gt;Start your meeting, workshop, or social event with fun and connection using our Ice Breaker Bingo Card Template Generator! Whether you’re hosting a team-building session, networking event, or classroom activity, our tool helps you create engaging bingo cards filled with conversation starters and interesting facts.&lt;br /&gt;\nAdd words and phrases like “Has traveled abroad”, “Speaks more than one language” or personalize your cards with unique prompts that fit your group. With just a few clicks, you can design interactive bingo cards that make introductions easy and enjoyable.&lt;br /&gt;\nPrint your bingo cards or share them online &#8211; perfect for in-person gatherings or virtual meetings. Turn awkward silences into meaningful conversations and create a welcoming atmosphere for everyone!&lt;/p&gt;\n",
    "bottomH2": "",
    "bottomSecondaryText": ""
  },
  {
    "name": "Football Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/football_icon.png",
    "href": "https://www.bingoblitz.com/generator/football-bingo/",
    "url": "generator/football-bingo",
    "heading": "Football Bingo Card Template",
    "description": "Score big with our free Football Bingo card generator! Perfect for game day parties, classrooms, and sports fans. Customize, print, and play instantly!",
    "cardName": "Football Bingo",
    "presetWords": "Goal, Penalty, Free kick, Corner, Offside, Referee, Whistle, Yellow card, Red card, Foul, Pass, Tackle, Dribble, Shot, Save, Goalkeeper, Defender, Midfielder, Striker, Substitution, Kickoff, Extra time, Stadium, Fans, Trophy",
    "bottomH1": "Kick Off the Fun: Soccer Bingo Card Generator",
    "bottomMainText": "&lt;p&gt;Turn your soccer match watch party or tournament into an unforgettable experience with our Soccer Bingo Card Template Generator! Whether you’re cheering for your favorite club, hosting a World Cup viewing, or organizing a youth team event, our tool helps you create exciting bingo cards that keep fans engaged from the first whistle to the final goal.&lt;br /&gt;\nFill your cards with soccer-themed words and phrases like “Goal”, “Corner Kick”, “Penalty”, “Yellow Card”, “Offside” or personalize them with team names, player references, and fun match-day traditions. With just a few clicks, you can design interactive bingo cards that make every play a chance to win!&lt;br /&gt;\nPrint your bingo cards or share them online-perfect for stadium tailgates, living room watch parties, or virtual gatherings. Add a competitive twist to your soccer celebration and keep the excitement going all match long!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Soccer Bingo",
    "bottomSecondaryText": "&lt;p&gt;Our Soccer Bingo Generator makes it easy to design cards that match your event and fandom. Choose from ready-to-use word lists or create your own with custom phrases to suit your favorite teams and leagues.&lt;br /&gt;\nFrom classic soccer terms to playful fan prompts, you can craft bingo cards that fit any occasion. Whether you’re watching with friends, family, or teammates, our customizable templates bring energy and fun to every goal.&lt;br /&gt;\nStart now and make your soccer party as thrilling as the game itself!&lt;/p&gt;\n"
  },
  {
    "name": "Sensitive Person Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/sensitive_icon.png",
    "href": "https://www.bingoblitz.com/generator/sensitive-person-bingo/",
    "url": "generator/sensitive-person-bingo",
    "heading": "Sensitive Person Bingo Card Template",
    "description": "Create a thoughtful and relatable Sensitive Person Bingo card with our free generator. Great for self-awareness, support groups, or light-hearted reflection. Print and play instantly!",
    "cardName": "Sensitive Person Bingo",
    "presetWords": "Loud noises, Bright lights, Crowded spaces, Deep thinker, Needs alone time, Cries during movies, Empathetic, Hates conflict, Notices small details, Gets overwhelmed easily, Creative, Overthinks, Loves animals, Sensitive to criticism, Values honesty, Avoids drama, Introverted, Strong intuition, Easily startled, Prefers calm music, Soft fabrics, Needs quiet, Emotionally aware, Loves deep conversations, Calms others",
    "bottomH1": "Celebrate Sensitivity: Sensitive Person Bingo Card Generator",
    "bottomMainText": "&lt;p&gt;Turn empathy and awareness into a fun activity with our Sensitive Person Bingo Card Template Generator! Whether you’re hosting a wellness workshop, a self-care event, or just want a playful way to appreciate emotional intelligence, our tool helps you create bingo cards that highlight the beauty of being sensitive.&lt;br /&gt;\nFill your cards with thoughtful words and phrases like “Notices small details”, “Feels deeply”, “Values kindness”, “Gets emotional during movies” or personalize them with affirmations and traits that resonate with your group. With just a few clicks, you can design meaningful bingo cards that spark conversations and smiles.&lt;br /&gt;\nPrint your bingo cards or share them online &#8211; perfect for team-building, therapy groups, or mindfulness sessions. Make sensitivity something to celebrate and enjoy together!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Sensitive Person Bingo",
    "bottomSecondaryText": "&lt;p&gt;Our Sensitive Person Bingo Generator makes it easy to design cards that reflect empathy and individuality. Choose from ready-to-use word lists or create your own with custom phrases that fit your audience.&lt;br /&gt;\nFrom gentle personality traits to self-care reminders, you can craft bingo cards that encourage positivity and connection. Whether you’re hosting an in-person event or a virtual gathering, our customizable templates bring warmth and understanding to every interaction.&lt;br /&gt;\nStart now and make your activity as uplifting as the people who inspire it!&lt;/p&gt;\n"
  },
  {
    "name": "Bridal Shower Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/bridal_icon.png",
    "href": "https://www.bingoblitz.com/generator/bridal-shower-bingo/",
    "url": "generator/bridal-shower-bingo",
    "heading": "Bridal Shower Bingo Card Template",
    "description": "Design fun and elegant Bridal Shower Bingo cards with our free template. Perfect for celebrating the bride-to-be at showers, luncheons, or parties. Print and play instantly!",
    "cardName": "Bridal Shower Bingo",
    "presetWords": "Bride, Groom, Ring, Bouquet, Veil, Vows, Love, Dress, Wedding cake, Honeymoon, Ceremony, Bridesmaids, Champagne, Toast, Gift, Centerpiece, Reception, Dance, Mr &amp; Mrs, Something blue, Flower girl, Photographer, Invitations, Kiss, Proposal",
    "bottomH1": "Celebrate Love: Bridal Shower Bingo",
    "bottomMainText": "&lt;p&gt;Make your bridal shower unforgettable with our Bridal Shower Bingo Card Template Generator! Perfect for weddings, bridal parties, or bachelorette celebrations, this tool helps you create bingo cards filled with fun and festive words that everyone will enjoy.&lt;br /&gt;\nFill your bingo squares with bridal-themed words like “veil,” “bouquet,” “toast,” or “honeymoon,” or add your own ideas to match your party’s theme. In just a few clicks, you’ll design unique bingo cards that keep guests laughing and engaged from start to finish.&lt;br /&gt;\nPrint your cards or play online &#8211; perfect for friends, family, or mixed-age groups. Turn your bridal shower into a joyful, interactive celebration everyone will remember!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Bridal Shower Bingo Cards",
    "bottomSecondaryText": "&lt;p&gt;Our Bridal Shower Bingo Generator makes it easy to create cards that fit your party theme. Simply choose your words for each square to make every card unique and entertaining.&lt;br /&gt;\nWhether it’s a small gathering, large party, or virtual bridal shower, our word-based bingo templates help make your celebration lively, memorable, and full of fun.&lt;br /&gt;\nStart now and make your bridal shower extra special with custom Bridal Shower Bingo cards!&lt;/p&gt;\n"
  },
  {
    "name": "Bible Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/bible_icon.png",
    "href": "https://www.bingoblitz.com/generator/bible-bingo/",
    "url": "generator/bible-bingo",
    "heading": "Bible Bingo Card Template",
    "description": "Create free, faith-filled Bible Bingo cards with our easy-to-use generator. Ideal for Sunday school, Bible study, and church events. Customize, print, and play instantly!",
    "cardName": "Bible Bingo",
    "presetWords": "Genesis, Noah, Moses, Ten Commandments, Jesus, Gospel, Paul, Psalms, Prayer, Disciples, Resurrection, Holy Spirit, Cross, Bethlehem, David, Proverbs, Revelation, Baptism, Apostle, Sin, Grace, Salvation, Miracle, Sabbath, Church",
    "bottomH1": "Faith and Fun: Bible Bingo",
    "bottomMainText": "&lt;p&gt;Bring scripture and fellowship together with our Bible Bingo Card Template Generator! Perfect for Sunday school, youth groups, or church gatherings, this tool helps you create bingo cards filled with meaningful Bible words that make learning fun and interactive.&lt;br /&gt;\nFill your bingo squares with Bible-themed words like “Noah”, “Moses”, “Ark” or “Ten Commandments” or add your own ideas to match your lesson or group. In just a few clicks, you’ll design unique bingo cards that keep everyone engaged and inspired.&lt;br /&gt;\nPrint your cards or play online &#8211; perfect for kids, teens, or adults. Turn your Bible study or church event into a joyful, interactive experience that reinforces scripture in a fun way!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Bible Bingo Cards",
    "bottomSecondaryText": "&lt;p&gt;Our Bible Bingo Generator makes it easy to create cards that fit your lesson or group theme. Simply choose your words for each square to make every card unique and engaging.&lt;br /&gt;\nWhether it’s for Sunday school, a youth group, or a church event, our word-based bingo templates help make learning scripture memorable, fun, and interactive.&lt;br /&gt;\nStart now and bring faith and fun together with custom Bible Bingo cards!&lt;/p&gt;\n"
  },
  {
    "name": "Summer Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/summer_icon.png",
    "href": "https://www.bingoblitz.com/generator/summer-bingo/",
    "url": "generator/summer-bingo",
    "heading": "Summer Bingo Card Template",
    "description": "Make the most of summer fun with our free Summer Bingo card generator! Perfect for kids, families, camps, and parties. Customize, print, and play instantly.",
    "cardName": "Summer Bingo",
    "presetWords": "Sunshine, Beach, Ice cream, Sunglasses, Sandcastle, Pool, Flip-flops, Vacation, BBQ, Swimsuit, Watermelon, Lemonade, Sunscreen, Fireworks, Road trip, Camp, Popsicle, Ocean, Heatwave, Hammock, Tanning, Frisbee, Kayak, Surfboard, Coconut",
    "bottomH1": "Fun in the Sun: Summer Bingo",
    "bottomMainText": "&lt;p&gt;Make your summer gatherings extra exciting with our Summer Bingo Card Template Generator! Perfect for family picnics, beach parties, backyard BBQs, or classroom activities, this tool helps you create bingo cards filled with sunny, seasonal words.&lt;br /&gt;\nFill your bingo squares with summer-themed words like “ice cream”, “sunglasses”, “sandcastle” or “swimming” or add your own ideas to match your celebration. In just a few clicks, you’ll design unique bingo cards that keep everyone entertained from start to finish.&lt;br /&gt;\nPrint your cards or play online &#8211; perfect for kids, teens, or adults. Turn your summer events into laughter-filled, interactive experiences!&lt;/p&gt;\n",
    "bottomH2": "",
    "bottomSecondaryText": ""
  },
  {
    "name": "Find Someone Who Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/find_someone_bingo.png",
    "href": "https://www.bingoblitz.com/generator/find-someone-who-bingo/",
    "url": "generator/find-someone-who-bingo",
    "heading": "Find Someone Who Bingo Card Template",
    "description": "Discover customizable &#039;Find Someone Who&#039; bingo card templates for icebreakers, team-building, and parties",
    "cardName": "Find Someone Who Bingo",
    "presetWords": "Has a pet, Plays a sport, Has traveled to Europe, Can cook, Speaks another language, Likes sushi, Hates coffee, Has green eyes, Is left-handed, Plays an instrument, Wears contacts, Has a tattoo, Likes horror movies, Can sing, Is an only child, Has broken a bone, Likes Marvel movies, Has met a celebrity, Wakes up early, Has been camping, Likes spicy food, Has more than two siblings, Likes reading, Loves to travel, Is scared of spiders",
    "bottomH1": "Connect &amp; Discover: Find Someone Who Bingo Card Generator",
    "bottomMainText": "&lt;p&gt;Turn any gathering into a fun, interactive experience with our Find Someone Who Bingo Card Template Generator! Perfect for team-building events, classrooms, networking sessions, or social parties, this activity helps participants break the ice and learn more about each other in an engaging way.&lt;br /&gt;\nFill your cards with prompts like “Find someone who speaks two languages”, “Has traveled abroad” or create your own personalized questions that fit your group. With just a few clicks, you can design bingo cards that encourage conversation and connection.&lt;br /&gt;\nPrint your bingo cards or share them online &#8211; ideal for in-person events or virtual meetups. Make introductions easy and fun while turning strangers into friends!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Find Someone Who Bingo",
    "bottomSecondaryText": "&lt;p&gt;Our generator makes it simple to design cards that match your event’s theme and tone. Choose from ready-to-use word lists or create your own with custom prompts that reflect your audience’s interests.&lt;br /&gt;\nFrom professional networking to casual social gatherings, you can craft bingo cards that fit any occasion. Whether you’re hosting a corporate event, a classroom activity, or a community meetup, our customizable templates bring energy and interaction to every moment.&lt;br /&gt;\nStart now and make your event memorable, engaging, and full of great conversations!&lt;/p&gt;\n"
  },
  {
    "name": "Bachelorette Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/bachelorette_bingo.png",
    "href": "https://www.bingoblitz.com/generator/bachelorette-bingo/",
    "url": "generator/bachelorette-bingo",
    "heading": "Bachelorette Bingo Card Template",
    "description": "Download fun and customizable Bachelorette Bingo Card templates perfect for bridal showers and parties. Easy to print and play for unforgettable bachelorette celebrations!",
    "cardName": "Bachelorette Bingo",
    "presetWords": "Bride tribe, Veil, Champagne, Party bus, Dancing, Matching shirts, High heels, Sash, Tiara, Cocktail, Selfie, Ring, Dare, Laughter, Karaoke, Selfie stick, Hangover, Bridesmaids, Girls night, Decor, Photo booth, Confetti, Surprise, Games, Cheers",
    "bottomH1": "Party Fun: Bachelorette Bingo",
    "bottomMainText": "&lt;p&gt;Make your bachelorette party unforgettable with our Bachelorette Bingo Card Template Generator! Perfect for celebrations with friends, bridal parties, or virtual events, this tool helps you create bingo cards filled with fun and festive words that keep everyone laughing and engaged.&lt;br /&gt;\nFill your bingo squares with bachelorette-themed words like “champagne,” “dance floor” “toasts” or “party favors” or add your own prompts to match your celebration. In just a few clicks, you’ll design unique bingo cards that make the party even more exciting.&lt;br /&gt;\nPrint your cards or play online &#8211; perfect for friends of all ages. Turn your bachelorette gathering into a fun, interactive event everyone will remember!&lt;/p&gt;\n",
    "bottomH2": "",
    "bottomSecondaryText": ""
  },
  {
    "name": "Birthday Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/birthday_bingo.png",
    "href": "https://www.bingoblitz.com/generator/birthday-bingo/",
    "url": "generator/birthday-bingo",
    "heading": "Birthday Bingo Card Template",
    "description": "Celebrate in style with free, customizable Birthday Bingo Card templates! Perfect for kids and adults—fun, printable party games for all ages.",
    "cardName": "Birthday Bingo",
    "presetWords": "Cake, Candles, Balloons, Gifts, Party, Decorations, Music, Streamers, Cupcake, Confetti, Wrapping paper, Hat, Surprise, Card, Ice cream, Friends, Family, Games, Laughter, Dance, Wishes, Banner, Piñata, Snacks, Smile",
    "bottomH1": "Celebrate in Style: Birthday Bingo Card Generator",
    "bottomMainText": "&lt;p&gt;Make birthdays extra fun with our Birthday Bingo Card Template Generator! Whether you’re planning a party for kids, teens, or adults, our tool helps you create personalized bingo cards that bring laughter and excitement to the celebration.&lt;br /&gt;\nFill your cards with festive words and phrases like “Cake”, “Candles”, “Happy Birthday”, “Party Hat”, “Gift” or customize them with inside jokes, favorite hobbies, and unique birthday traditions. With just a few clicks, you can design bingo cards that make every moment of the party interactive and memorable.&lt;br /&gt;\nPrint your bingo cards or share them online &#8211; perfect for in-person parties or virtual celebrations. Add a playful twist to your birthday event and keep guests entertained from start to finish!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Birthday Bingo",
    "bottomSecondaryText": "&lt;p&gt;Our Birthday Bingo Generator makes it easy to design cards that match your party theme and style. Choose from ready-to-use word lists or create your own with custom phrases that reflect the birthday person’s personality.&lt;br /&gt;\nFrom colorful, festive designs to elegant layouts for milestone birthdays, you can craft bingo cards that fit any vibe. Whether you’re hosting a small family gathering or a big bash, our customizable templates bring joy and energy to every celebration.&lt;br /&gt;\nStart now and make your birthday party unforgettable &#8211; because every square is a reason to smile!&lt;/p&gt;\n"
  },
  {
    "name": "Zoom Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/zoom_bingo.png",
    "href": "https://www.bingoblitz.com/generator/zoom-bingo/",
    "url": "generator/zoom-bingo",
    "heading": "Zoom Bingo Card Template",
    "description": "Make virtual meetings more fun with Zoom Bingo Card templates! Download customizable, printable cards for team-building, remote games, and virtual parties.",
    "cardName": "Zoom Bingo",
    "presetWords": "You&#039;re on mute, Frozen screen, Awkward silence, Background noise, Echo, Pet appears, Virtual background, Late joiner, Talking over each other, Poor connection, Screen share, &quot;Can you see my screen?&quot;, Typing sounds, Disconnected, Lag, Zoom fatigue, Unmuted mic, Chat message, Waiting room, Breakout room, Raise hand, Camera off, &quot;Let&#039;s circle back&quot;, Time check, Everyone waves",
    "bottomH1": "Make Virtual Meetings Fun: Zoom Bingo Card Generator",
    "bottomMainText": "&lt;p&gt;Turn your video calls into a lively, interactive experience with our Zoom Bingo Card Template Generator! Whether you’re hosting a team meeting, virtual happy hour, or online class, our tool helps you create bingo cards that add humor and engagement to every session.&lt;br /&gt;\nFill your cards with relatable phrases like “You’re on mute”, “Can you see my screen?”, “Background noise”, “Awkward silence” or personalize them with inside jokes and common remote-work moments. With just a few clicks, you can design bingo cards that make virtual meetings something everyone looks forward to.&lt;br /&gt;\nPrint your bingo cards or share them online &#8211; perfect for remote teams, virtual events, and online communities. Break the monotony and bring laughter to your next Zoom call!&lt;/p&gt;\n",
    "bottomH2": "Customize Your Zoom Bingo",
    "bottomSecondaryText": "&lt;p&gt;Our Zoom Bingo Generator makes it easy to design cards that fit your team’s personality and meeting style. Choose from ready-to-use word lists or create your own with custom phrases that capture your group’s quirks.&lt;br /&gt;\nFrom classic video call mishaps to fun team-specific prompts, you can craft bingo cards that turn routine meetings into memorable moments. Whether it’s a formal meeting or a casual catch-up, our customizable templates keep everyone engaged and smiling.&lt;br /&gt;\nStart now and make your next Zoom call the highlight of the day!&lt;/p&gt;\n"
  },
  {
    "name": "Beach Bingo",
    "icon": "https://www.bingoblitz.com/wp-content/uploads/2025/10/beach_bingo.png",
    "href": "https://www.bingoblitz.com/generator/beach-bingo/",
    "url": "generator/beach-bingo",
    "heading": "Beach Bingo Card Template",
    "description": "Enjoy sun and sand with fun Beach Bingo Card templates! Perfect for kids, parties, or classroom activities - printable and easy to customize for seaside adventures.",
    "cardName": "Beach Bingo",
    "presetWords": "Sand, Waves, Shells, Sunscreen, Towel, Umbrella, Swimsuit, Sunglasses, Cooler, Flip-flops, Frisbee, Beach ball, Bucket, Shovel, Kite, Lifeguard, Boogie board, Ice cream, Picnic, Tan, Seaweed, Starfish, Surfboard, Ocean, Sunburn",
    "bottomH1": "Bring the Sunshine: Beach Bingo Card Generator",
    "bottomMainText": "&lt;p&gt;Turn your beach day into a fun-filled adventure with our Beach Bingo Card Template Generator! Whether you’re planning a family outing, a summer party, or a seaside scavenger hunt, our tool helps you create bingo cards that make every moment at the shore exciting.&lt;br /&gt;\nFill your cards with beach-themed words like “Seashell”, “Sandcastle”, “Flip-flops”, “Surfboard” “Sunblock,” or customize them with local landmarks, favorite activities, and playful prompts. With just a few clicks, you can design bingo cards that keep everyone entertained while soaking up the sun.&lt;br /&gt;\nPrint your bingo cards or share them online &#8211; perfect for beach parties, vacations, or virtual summer games. Add a splash of fun to your day and turn simple beach time into a memorable experience!&lt;/p&gt;\n",
    "bottomH2": "",
    "bottomSecondaryText": ""
  }
];

  const THEMES_DATA = [
    {
      groupName: 'Celebrations',
      values: [
        {
          title: 'Bingo (Classic)',
          optionValue: 'Bingo',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/bingo_generic.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Birthday',
          optionValue: 'Birthday',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/birthday.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Family BBQ',
          optionValue: 'Family-friends-BBQ',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/bbq.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Family Reunions',
          optionValue: 'Family-reunions',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/family_reunion.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Bachelorette Party',
          optionValue: 'Bachelorette-party',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/bachelorette_party.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Baby Shower',
          optionValue: 'Baby-shower',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/baby_shower.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        }
      ]
    },
    {
      groupName: 'Holidays',
      values: [
        {
          title: '4th July',
          optionValue: 'july_4th',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/july_4th.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Christmas Eve',
          optionValue: 'christmas-eve',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/christmas.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Easter',
          optionValue: 'easter',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/easter.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'New Year',
          optionValue: 'new-year',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/new_years_eve.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: "Valentine's Day",
          optionValue: 'valentines-day',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/valentine.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Halloween',
          optionValue: 'halloween',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/halloween.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Summer',
          optionValue: 'summer',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/summer.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        }
      ]
    },
    {
      groupName: 'Cities',
      values: [
        {
          title: 'New York',
          optionValue: 'New-York',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/new_york.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Madrid',
          optionValue: 'Madrid',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/madrid.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Tokyo',
          optionValue: 'Tokyo',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/tokyo.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Paris',
          optionValue: 'Paris',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/paris.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'London',
          optionValue: 'London',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/london.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        },
        {
          title: 'Hong Kong',
          optionValue: 'Hong Kong',
          imgUrl: 'https://www.bingoblitz.com/wp-content/uploads/2023/06/hong_kong.png',
          color: '#0b0b0b',
          fontSize: 48,
          fontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleFontSize: 42,
          titleFontFamily: 'DaxCondensed, Poppins, sans-serif',
          titleColor: '#000',
          bgColor: '#fff9b0'
        }
      ]
    }
  ];

  // --- AUDIO & VOICE CALLER ENGINE ---
  class SoundEngine {
    constructor() {
      this.audioCtx = null;
    }

    initCtx() {
      if (!this.audioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.audioCtx = new AudioCtx();
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    }

    playChime() {
      try {
        this.initCtx();
        if (!this.audioCtx) return;
        const now = this.audioCtx.currentTime;
        
        // Bell note 1
        const osc1 = this.audioCtx.createOscillator();
        const gain1 = this.audioCtx.createGain();
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(587.33, now); // D5
        gain1.gain.setValueAtTime(0.15, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc1.connect(gain1);
        gain1.connect(this.audioCtx.destination);
        osc1.start(now);
        osc1.stop(now + 0.4);

        // Bell note 2 (Harmonic)
        const osc2 = this.audioCtx.createOscillator();
        const gain2 = this.audioCtx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(880, now + 0.08); // A5
        gain2.gain.setValueAtTime(0.18, now + 0.08);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc2.connect(gain2);
        gain2.connect(this.audioCtx.destination);
        osc2.start(now + 0.08);
        osc2.stop(now + 0.6);
      } catch (e) {
        console.warn('Audio chime error:', e);
      }
    }
  }

  const soundEngine = new SoundEngine();

  class TextToSpeech {
    constructor() {
      this.synth = window.speechSynthesis;
    }

    speak(phrase) {
      if (!this.synth) return;
      try {
        this.synth.cancel(); // Stop prior utterance
        const utter = new SpeechSynthesisUtterance(phrase);
        utter.rate = 0.85;
        utter.pitch = 1.05;
        this.synth.speak(utter);
      } catch (err) {
        console.warn('Speech error:', err);
      }
    }

    stop() {
      if (this.synth) this.synth.cancel();
    }
  }

  const tts = new TextToSpeech();

  class BingoCaller {
    constructor(speech) {
      this.speech = speech;
      this.columnLetters = ['B', 'I', 'N', 'G', 'O'];
      this.wordsQueue = [];
      this.intervalId = null;
      this.speed = 3500;
      this.voiceEnabled = true;
      this.isRunning = false;
    }

    createQueue(wordsGrid) {
      const list = [];
      const cols = wordsGrid.length;
      for (let c = 0; c < cols; c++) {
        const letter = this.columnLetters[c % this.columnLetters.length];
        for (let r = 0; r < wordsGrid[c].length; r++) {
          const item = wordsGrid[c][r];
          if (item && item.toString().trim() !== '') {
            list.push({ column: letter, word: item.toString() });
          }
        }
      }
      return this.shuffle(list);
    }

    shuffle(arr) {
      let m = arr.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
      }
      return arr;
    }

    drawBall(ball) {
      const colClass = 'ball_' + ball.column.toLowerCase();
      const displayTxt = ball.word.length > 8 ? ball.word.substring(0, 7) + '..' : ball.word;
      const html = '<div class="ball ' + colClass + '" title="' + ball.column + ' - ' + ball.word + '">' +
                   '<span class="ball-letter">' + ball.column + '</span>' +
                   '<span class="ball-word">' + displayTxt + '</span>' +
                   '</div>';
      $('.played-balls').prepend(html);
    }

    start(wordsGrid) {
      if (this.isRunning) return;
      this.isRunning = true;
      $('#play-now').data('is-started', 'true').addClass('paused');
      $('.played-balls').empty();

      this.wordsQueue = this.createQueue(wordsGrid);
      if (this.wordsQueue.length === 0) {
        alert('Please enter or generate bingo words first!');
        this.stop();
        return;
      }

      const nextBall = () => {
        if (this.wordsQueue.length === 0) {
          this.stop();
          return;
        }
        const ball = this.wordsQueue.pop();
        soundEngine.playChime();
        this.drawBall(ball);

        if (this.voiceEnabled) {
          setTimeout(() => {
            this.speech.speak(ball.column + ', ' + ball.word);
          }, 200);
        }
      };

      nextBall();
      this.intervalId = setInterval(nextBall, this.speed);
    }

    stop() {
      this.isRunning = false;
      $('#play-now').data('is-started', 'false').removeClass('paused');
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.speech.stop();
    }
  }

  const caller = new BingoCaller(tts);

  // --- CARD GENERATOR CANVAS ENGINE ---
  class CardGenerator {
    constructor() {
      this.canvas = document.getElementById('generator-results-canvas');
      this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
      this.gridSize = 5;
      this.title = 'BINGO BLITZ';
      this.words = [];
      this.currentTemplate = THEMES_DATA[0].values[0];

      this.options = {
        width: 735,
        height: 801,
        paddingLeft: 72,
        paddingRight: 77,
        paddingTop: 154,
        paddingBottom: 65,
        cellTextPadding: 14,
        titleTopPadding: 58,
        paddingTopGrid: 100,
        paddingLeftGrid: 70
      };

      this.bgImage = new Image();
      this.bgImage.crossOrigin = 'Anonymous';

      this.gridImage = new Image();
      this.gridImage.crossOrigin = 'Anonymous';

      this.logoImage = new Image();
      this.logoImage.crossOrigin = 'Anonymous';
      this.logoImage.src = 'https://www.bingoblitz.com/wp-content/themes/bingo-theme/bingo-card-generator/bingo_generator/images/bingo-logo.png';

      this.loadTheme(this.currentTemplate);
    }

    setGridSize(size) {
      this.gridSize = parseInt(size, 10);
      this.loadGridImage();
    }

    getGridSize() {
      return this.gridSize;
    }

    setTitle(val) {
      this.title = val && val.trim() ? val.trim() : 'BINGO BLITZ';
    }

    getLogoPosition() {
      if (this.gridSize === 5) return [2, 2];
      if (this.gridSize === 4) return [3, 3];
      if (this.gridSize === 3) return [1, 1];
      return [2, 2];
    }

    loadTheme(theme) {
      this.currentTemplate = theme;
      this.bgImage.onload = () => this.draw();
      this.bgImage.src = theme.imgUrl;
      this.loadGridImage();
    }

    loadGridImage() {
      const gridUrl = 'https://www.bingoblitz.com/wp-content/themes/bingo-theme/bingo-card-generator/bingo_generator/images/grid' + this.gridSize + '.png';
      this.gridImage.onload = () => this.draw();
      this.gridImage.src = gridUrl;
    }

    setWords(wordsMatrix) {
      this.words = wordsMatrix;
      this.draw();
    }

    getWords() {
      return this.words;
    }

    generateNumbersGrid() {
      const size = this.gridSize;
      const matrix = [];
      const logoPos = this.getLogoPosition();

      // Column ranges for 75-ball bingo:
      // B: 1-15, I: 16-30, N: 31-45, G: 46-60, O: 61-75
      for (let c = 0; c < size; c++) {
        matrix[c] = [];
        const start = c * 15 + 1;
        const available = [];
        for (let n = start; n < start + 15; n++) available.push(n);
        this.shuffleArray(available);

        for (let r = 0; r < size; r++) {
          if (c === logoPos[0] && r === logoPos[1]) {
            matrix[c][r] = ''; // FREE Space
          } else {
            matrix[c][r] = available.pop() || (start + r);
          }
        }
      }
      return matrix;
    }

    shuffleArray(arr) {
      let m = arr.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
      }
      return arr;
    }

    drawRoundedRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    drawTitle() {
      const ctx = this.ctx;
      const titleText = (this.title || 'BINGO BLITZ').toUpperCase();
      const maxTextWidth = this.options.width - 160;

      ctx.save();
      ctx.font = 'bold 36px ' + this.currentTemplate.titleFontFamily;
      let measured = ctx.measureText(titleText).width;
      let badgeWidth = Math.max(340, measured + 60);
      let badgeHeight = 58;
      let bx = (this.options.width - badgeWidth) / 2;
      let by = 26;

      // Outer glow / shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 12;
      ctx.shadowOffsetY = 4;

      // White rounded badge
      ctx.fillStyle = '#ffffff';
      this.drawRoundedRect(ctx, bx, by, badgeWidth, badgeHeight, 28);
      ctx.fill();

      // Subtle border
      ctx.shadowColor = 'transparent';
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Title Text
      ctx.fillStyle = this.currentTemplate.titleColor || '#002663';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '900 34px ' + this.currentTemplate.titleFontFamily;
      ctx.fillText(titleText, this.options.width / 2, by + badgeHeight / 2 + 2, badgeWidth - 40);
      ctx.restore();
    }

    drawGridFallback(tableLeft, tableTop, tableWidth, tableHeight, cellWidth, cellHeight) {
      const ctx = this.ctx;
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 40, 100, 0.25)';
      ctx.lineWidth = 2;

      for (let i = 0; i <= this.gridSize; i++) {
        // Vertical
        ctx.beginPath();
        ctx.moveTo(tableLeft + i * cellWidth, tableTop);
        ctx.lineTo(tableLeft + i * cellWidth, tableTop + tableHeight);
        ctx.stroke();

        // Horizontal
        ctx.beginPath();
        ctx.moveTo(tableLeft, tableTop + i * cellHeight);
        ctx.lineTo(tableLeft + tableWidth, tableTop + i * cellHeight);
        ctx.stroke();
      }
      ctx.restore();
    }

    fitText(ctx, text, maxWidth, maxHeight, maxFontSize) {
      let words = text.toString().split(' ');
      let lines = [];
      let fontSize = maxFontSize;

      // Auto-wrap words
      const getLines = (size) => {
        ctx.font = 'bold ' + size + 'px ' + this.currentTemplate.fontFamily;
        let testLines = [];
        let curLine = words[0];

        for (let i = 1; i < words.length; i++) {
          let test = curLine + ' ' + words[i];
          if (ctx.measureText(test).width <= maxWidth) {
            curLine = test;
          } else {
            testLines.push(curLine);
            curLine = words[i];
          }
        }
        testLines.push(curLine);
        return testLines;
      };

      lines = getLines(fontSize);
      let totalH = lines.length * (fontSize * 1.15);

      while ((totalH > maxHeight || lines.some(l => ctx.measureText(l).width > maxWidth)) && fontSize > 12) {
        fontSize -= 2;
        lines = getLines(fontSize);
        totalH = lines.length * (fontSize * 1.15);
      }

      return { lines, fontSize };
    }

    draw() {
      if (!this.ctx) return;
      const ctx = this.ctx;
      const w = this.options.width;
      const h = this.options.height;

      ctx.clearRect(0, 0, w, h);

      // 1. Draw Background Image or Fallback Gradient
      if (this.bgImage.complete && this.bgImage.naturalWidth > 0) {
        ctx.drawImage(this.bgImage, 0, 0, w, h);
      } else {
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(1, '#f1f5f9');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      // 2. Draw Grid Border overlay Image
      if (this.gridImage.complete && this.gridImage.naturalWidth > 0) {
        ctx.drawImage(this.gridImage, this.options.paddingLeftGrid, this.options.paddingTopGrid);
      }

      // 3. Grid Coordinates
      const tableLeft = this.options.paddingLeft;
      const tableRight = w - this.options.paddingRight;
      const tableTop = this.options.paddingTop;
      const tableBottom = h - this.options.paddingBottom;
      const tableWidth = tableRight - tableLeft;
      const tableHeight = tableBottom - tableTop;

      const cellWidth = tableWidth / this.gridSize;
      const cellHeight = tableHeight / this.gridSize;

      // Draw fallback subtle grid lines if gridImage hasn't loaded
      if (!this.gridImage.complete || this.gridImage.naturalWidth === 0) {
        this.drawGridFallback(tableLeft, tableTop, tableWidth, tableHeight, cellWidth, cellHeight);
      }

      // 4. Fill Cells
      const logoPos = this.getLogoPosition();
      const logoCol = logoPos[0];
      const logoRow = logoPos[1];

      for (let c = 0; c < this.gridSize; c++) {
        for (let r = 0; r < this.gridSize; r++) {
          const cx = tableLeft + c * cellWidth + cellWidth / 2;
          const cy = tableTop + r * cellHeight + cellHeight / 2;

          // Free Space
          if (c === logoCol && r === logoRow) {
            if (this.logoImage.complete && this.logoImage.naturalWidth > 0) {
              const lw = Math.min(cellWidth * 0.85, 120);
              const lh = lw * (this.logoImage.naturalHeight / this.logoImage.naturalWidth);
              ctx.drawImage(this.logoImage, cx - lw / 2, cy - lh / 2, lw, lh);
            } else {
              // Vector Free Space Badge
              ctx.save();
              ctx.fillStyle = '#ffde00';
              ctx.beginPath();
              ctx.arc(cx, cy, Math.min(cellWidth, cellHeight) * 0.38, 0, Math.PI * 2);
              ctx.fill();
              ctx.strokeStyle = '#e67e00';
              ctx.lineWidth = 3;
              ctx.stroke();

              ctx.fillStyle = '#002663';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.font = '900 24px ' + this.currentTemplate.fontFamily;
              ctx.fillText('FREE', cx, cy);
              ctx.restore();
            }
          } else {
            // Words / Numbers
            const val = this.words && this.words[c] && this.words[c][r] !== undefined ? this.words[c][r] : '';
            if (val !== '') {
              ctx.save();
              const maxCellW = cellWidth - this.options.cellTextPadding * 2;
              const maxCellH = cellHeight - 12;
              const baseFontSize = this.gridSize === 5 ? 26 : (this.gridSize === 4 ? 30 : 36);

              const { lines, fontSize } = this.fitText(ctx, val, maxCellW, maxCellH, baseFontSize);

              ctx.fillStyle = this.currentTemplate.color || '#0b0b0b';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.font = 'bold ' + fontSize + 'px ' + this.currentTemplate.fontFamily;

              const lineHeight = fontSize * 1.15;
              const startY = cy - ((lines.length - 1) * lineHeight) / 2;

              for (let li = 0; li < lines.length; li++) {
                ctx.fillText(lines[li], cx, startY + li * lineHeight);
              }
              ctx.restore();
            }
          }
        }
      }

      // 5. Draw Title Capsule
      this.drawTitle();
    }
  }

  // --- INITIALIZE APPLICATION ---
  $(document).ready(function () {
    const cardGen = new CardGenerator();

    // 1. Populate Templates List (21 templates)
    function populateTemplates() {
      const $scrollList = $('#templates-scroll-list');
      const $mobileSelect = $('#templates-dropdown-mobile');
      $scrollList.empty();
      $mobileSelect.empty();

      TEMPLATES_LIST.forEach((tmpl, idx) => {
        const isActive = idx === 0;
        const iconSrc = tmpl.icon || 'https://www.bingoblitz.com/wp-content/uploads/2025/10/bingo_blitz_icon.png';

        // Scroll item
        const $item = $(
          '<a href="#" class="template-item ' + (isActive ? 'active' : '') + '" data-index="' + idx + '">' +
          '  <img src="' + iconSrc + '" alt="' + tmpl.name + '" class="template-icon">' +
          '  <span class="template-name">' + tmpl.name + '</span>' +
          '</a>'
        );
        $scrollList.append($item);

        // Mobile option
        const $opt = $('<option value="' + idx + '" ' + (isActive ? 'selected' : '') + '>' + tmpl.name + '</option>');
        $mobileSelect.append($opt);
      });
    }

    // 2. Select Template Handler
    function selectTemplateByIndex(idx) {
      const tmpl = TEMPLATES_LIST[idx];
      if (!tmpl) return;

      $('.template-item').removeClass('active');
      $('.template-item[data-index="' + idx + '"]').addClass('active');
      $('#templates-dropdown-mobile').val(idx);

      // Update Form Headers & Description
      $('#template-heading-display').text(tmpl.heading || tmpl.name);
      $('#template-desc-display').text(tmpl.description || '');

      // Update Card Title
      const titleVal = tmpl.cardName && tmpl.cardName !== 'Untitled' ? tmpl.cardName : 'BINGO BLITZ';
      $('#card-title').val(titleVal);
      $('#title').val(titleVal);
      cardGen.setTitle(titleVal);

      // Populate preset words or random numbers
      if (tmpl.presetWords && tmpl.presetWords.trim() !== '') {
        const wordsArray = tmpl.presetWords.split(',').map(s => s.trim()).filter(s => s !== '');
        $('#bingo-words').val(wordsArray.join('\n'));
      } else {
        // Default random numbers
        fillRandomNumbers();
      }

      updateWordsMatrixFromTextarea();
    }

    // 3. Update Word Counter & Matrix from Textarea
    function updateWordsMatrixFromTextarea() {
      const text = $('#bingo-words').val();
      const lines = text.split('\n').map(l => l.trim()).filter(l => l !== '');
      const gridSize = cardGen.getGridSize();
      const maxWords = gridSize * gridSize - 1;

      // Update Counter
      const $counter = $('.word-counter');
      $counter.text(lines.length + '/' + maxWords);
      if (lines.length > maxWords) {
        $counter.addClass('over-limit');
      } else {
        $counter.removeClass('over-limit');
      }

      // If user provided words, build matrix
      if (lines.length > 0) {
        const userWords = lines.slice(0, maxWords);
        const logoPos = cardGen.getLogoPosition();
        const matrix = [];
        let wordIdx = 0;

        for (let c = 0; c < gridSize; c++) {
          matrix[c] = [];
          for (let r = 0; r < gridSize; r++) {
            if (c === logoPos[0] && r === logoPos[1]) {
              matrix[c][r] = ''; // Free Space
            } else {
              matrix[c][r] = wordIdx < userWords.length ? userWords[wordIdx++] : '';
            }
          }
        }
        cardGen.setWords(matrix);
      } else {
        // Fallback to random numbers
        const numMatrix = cardGen.generateNumbersGrid();
        cardGen.setWords(numMatrix);
      }
    }

    function fillRandomNumbers() {
      const gridSize = cardGen.getGridSize();
      const maxWords = gridSize * gridSize - 1;
      const numMatrix = cardGen.generateNumbersGrid();
      const logoPos = cardGen.getLogoPosition();

      const wordsList = [];
      for (let c = 0; c < gridSize; c++) {
        for (let r = 0; r < gridSize; r++) {
          if (!(c === logoPos[0] && r === logoPos[1])) {
            wordsList.push(numMatrix[c][r]);
          }
        }
      }
      $('#bingo-words').val(wordsList.join('\n'));
      updateWordsMatrixFromTextarea();
    }

    function shuffleWordsText() {
      const text = $('#bingo-words').val();
      const lines = text.split('\n').map(l => l.trim()).filter(l => l !== '');
      if (lines.length > 0) {
        cardGen.shuffleArray(lines);
        $('#bingo-words').val(lines.join('\n'));
        updateWordsMatrixFromTextarea();
      }
    }

    // 4. Setup Theme Modal Popup Tabs & Content
    function setupThemeModal() {
      const $tabs = $('#theme-tabs-list');
      const $tabsContent = $('#theme-tabs-content');
      $tabs.empty();
      $tabsContent.empty();

      THEMES_DATA.forEach((group, gIdx) => {
        const isFirst = gIdx === 0;

        // Tab item
        const $tab = $(
          '<li class="' + (isFirst ? 'active' : '') + '" data-group="' + gIdx + '">' +
            group.groupName +
          '</li>'
        );
        $tabs.append($tab);

        // Content panel
        const $content = $('<li class="' + (isFirst ? 'active' : '') + '" data-content="' + gIdx + '"></li>');
        const $grid = $('<div class="theme-items-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 15px; padding: 15px;"></div>');

        group.values.forEach((th) => {
          const $themeCard = $(
            '<div class="theme-card-pick" style="background: rgba(255,255,255,0.08); border: 2px solid rgba(255,255,255,0.2); border-radius: 8px; padding: 10px; text-align: center; cursor: pointer; transition: all 0.2s ease;">' +
            '  <img src="' + th.imgUrl + '" alt="' + th.title + '" style="width: 100%; height: 90px; object-fit: cover; border-radius: 6px; margin-bottom: 8px;">' +
            '  <div style="font-weight: 700; font-size: 13px; color: #fff; margin-bottom: 6px;">' + th.title + '</div>' +
            '  <button class="btn-pick-me" style="background: #ffc400; color: #0b0b0b; border: none; padding: 4px 12px; border-radius: 12px; font-weight: 800; font-size: 11px; cursor: pointer;">PICK ME</button>' +
            '</div>'
          );

          $themeCard.hover(
            function() { $(this).css({ transform: 'translateY(-3px)', borderColor: '#ffc400' }); },
            function() { $(this).css({ transform: 'translateY(0)', borderColor: 'rgba(255,255,255,0.2)' }); }
          );

          $themeCard.on('click', function () {
            cardGen.loadTheme(th);
            $('#templates-popup').addClass('hidden');
          });

          $grid.append($themeCard);
        });

        $content.append($grid);
        $tabsContent.append($content);
      });

      // Tab click events
      $tabs.on('click', 'li', function () {
        const groupIdx = $(this).data('group');
        $tabs.find('li').removeClass('active');
        $(this).addClass('active');

        $tabsContent.find('li').removeClass('active');
        $tabsContent.find('li[data-content="' + groupIdx + '"]').addClass('active');
      });

      $('#showTemplatesPopup').on('click', function () {
        $('#templates-popup').removeClass('hidden');
      });

      $('#closeTemplatesPopup').on('click', function () {
        $('#templates-popup').addClass('hidden');
      });
    }

    // 5. Setup Grid Size Dropdown
    function setupGridSizeControls() {
      const $dropdown = $('#grid-size-dropdown');
      const $options = $('#grid-size-options-menu');

      $dropdown.on('click', function (e) {
        e.stopPropagation();
        $options.toggle();
      });

      $(document).on('click', function () {
        $options.hide();
      });

      $options.on('click', 'li', function (e) {
        e.stopPropagation();
        const size = $(this).data('grid-size');
        $('#current-grid-size-label').text(size + 'X' + size);
        $options.hide();

        cardGen.setGridSize(size);
        updateWordsMatrixFromTextarea();
      });
    }

    // 6. Direct Print & PDF Generator
    function generatePrintCardsHtml(cardsCount) {
      const container = document.getElementById('print-area');
      container.innerHTML = '';

      const page = document.createElement('div');
      page.className = 'print-page';

      // Save state
      const originalWords = JSON.parse(JSON.stringify(cardGen.getWords()));

      for (let i = 0; i < cardsCount; i++) {
        // Shuffle for player variety
        if (i > 0) {
          cardGen.shuffleWordsText ? shuffleWordsText() : null;
        }

        const img = document.createElement('img');
        img.className = 'print-card-item';
        img.src = cardGen.canvas.toDataURL('image/png');

        if (cardsCount === 1) {
          img.style.width = '88%';
        } else if (cardsCount === 2) {
          img.style.width = '46%';
        } else {
          img.style.width = '45%';
        }
        page.appendChild(img);
      }

      // Restore original
      cardGen.setWords(originalWords);

      container.appendChild(page);
    }

    $('#btn-browser-print').on('click', function () {
      const perPage = parseInt($('#cards-per-page-select').val() || '1', 10);
      generatePrintCardsHtml(perPage);
      setTimeout(() => {
        window.print();
      }, 200);
    });

    $('#generate-pdf').on('click', function (e) {
      e.preventDefault();
      const $loading = $('#pdf-loading');
      $loading.show();
      $(this).hide();

      setTimeout(() => {
        try {
          const perPage = parseInt($('#cards-per-page-select').val() || '1', 10);
          const orientation = perPage === 2 ? 'landscape' : 'portrait';

          if (window.jspdf && window.jspdf.jsPDF) {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF(orientation, 'pt', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();

            const imgData = cardGen.canvas.toDataURL('image/jpeg', 0.95);

            if (perPage === 1) {
              const cardW = pageWidth - 80;
              const cardH = cardW * (801 / 735);
              doc.addImage(imgData, 'JPEG', 40, (pageHeight - cardH) / 2, cardW, cardH);
            } else if (perPage === 2) {
              const cardW = (pageWidth - 80) / 2;
              const cardH = cardW * (801 / 735);
              doc.addImage(imgData, 'JPEG', 30, (pageHeight - cardH) / 2, cardW, cardH);
              doc.addImage(imgData, 'JPEG', 50 + cardW, (pageHeight - cardH) / 2, cardW, cardH);
            } else {
              const cardW = (pageWidth - 70) / 2;
              const cardH = cardW * (801 / 735);
              const startY = (pageHeight - cardH * 2 - 20) / 2;
              doc.addImage(imgData, 'JPEG', 25, startY, cardW, cardH);
              doc.addImage(imgData, 'JPEG', 45 + cardW, startY, cardW, cardH);
              doc.addImage(imgData, 'JPEG', 25, startY + cardH + 15, cardW, cardH);
              doc.addImage(imgData, 'JPEG', 45 + cardW, startY + cardH + 15, cardW, cardH);
            }

            const title = (cardGen.title || 'Bingo-Cards').replace(/[^a-zA-Z0-9_-]/g, '_');
            doc.save(title + '.pdf');
          } else {
            // Fallback to direct print
            window.print();
          }
        } catch (err) {
          console.error('PDF error:', err);
          window.print();
        } finally {
          $loading.hide();
          $('#generate-pdf').show();
        }
      }, 500);
    });

    // 7. Virtual Caller controls
    $('#play-now').on('click', function (e) {
      e.preventDefault();
      if ($(this).data('is-started') === 'true') {
        caller.stop();
      } else {
        caller.speed = parseInt($('#caller-speed-select').val() || '3500', 10);
        caller.voiceEnabled = $('#caller-voice-enabled').is(':checked');
        caller.start(cardGen.getWords());
      }
    });

    $('#caller-speed-select').on('change', function () {
      caller.speed = parseInt(this.value, 10);
    });

    $('#caller-voice-enabled').on('change', function () {
      caller.voiceEnabled = this.checked;
    });

    // 8. Event bindings for Form Inputs
    $('#card-title').on('input', function () {
      const val = $(this).val();
      $('#title').val(val);
      cardGen.setTitle(val);
      cardGen.draw();
    });

    $('#title').on('input', function () {
      const val = $(this).val();
      $('#card-title').val(val);
      cardGen.setTitle(val);
      cardGen.draw();
    });

    $('#bingo-words').on('input paste', function () {
      caller.stop();
      setTimeout(updateWordsMatrixFromTextarea, 20);
    });

    $('#btn-fill-numbers').on('click', function () {
      caller.stop();
      fillRandomNumbers();
    });

    $('#btn-shuffle-words').on('click', function () {
      caller.stop();
      shuffleWordsText();
    });

    $('#btn-clear-words').on('click', function () {
      caller.stop();
      $('#bingo-words').val('');
      updateWordsMatrixFromTextarea();
    });

    // Template item click
    $('#templates-scroll-list').on('click', '.template-item', function (e) {
      e.preventDefault();
      caller.stop();
      const idx = $(this).data('index');
      selectTemplateByIndex(idx);
    });

    $('#templates-dropdown-mobile').on('change', function () {
      caller.stop();
      selectTemplateByIndex(parseInt(this.value, 10));
    });

    // 9. FAQ Accordion Click Handler
    $('#generator-faq-accordion').on('click', '.collapse-toggler', function () {
      const $collapsible = $(this).closest('.collapsible');
      const $content = $collapsible.find('.collapse');
      const isShown = $collapsible.hasClass('show');

      if (isShown) {
        $collapsible.removeClass('show');
        $content.css('height', '0');
      } else {
        $collapsible.addClass('show');
        $content.css('height', 'auto');
      }
    });

    // 10. Mobile Menu Handlers
    $('#mobile-hamburger-btn').on('click', function () {
      $('#mobile-nav-drawer').addClass('active');
      $('#mobile-drawer-overlay').addClass('active');
    });

    $('#mobile-drawer-close-btn, #mobile-drawer-overlay').on('click', function () {
      $('#mobile-nav-drawer').removeClass('active');
      $('#mobile-drawer-overlay').removeClass('active');
    });

    // Initial setup
    populateTemplates();
    setupThemeModal();
    setupGridSizeControls();
    selectTemplateByIndex(0); // Classic Bingo Card Generator default
  });

})(jQuery);
