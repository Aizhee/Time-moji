

[![SZFK7.png](https://s12.gifyu.com/images/SZFK7.png)](https://gifyu.com/image/SZFK7)

**Time-Moji**: A lightweight JavaScript library that adds dynamic and visually appealing time-based emoji displays to your web applications. With Time-Moji, you can easily convert the current time into corresponding emojis, adding a fun and engaging element to your time displays.

![NPM Version](https://img.shields.io/npm/v/time-moji?style=flat&label=time-moji)


**Features**:
- **Clock Emoji 🕥**: Display the current time with a corresponding clock emoji, providing a fun and engaging user experience.
- **Landscape Emoji 🏙️**: Display landscape emojis to represent different times of the day, adding visual context to your time displays.
- **Customization**: Easily customize the appearance of your time displays by toggling between clock and landscape modes.
- **Simple Integration**: Integrate Time-Moji into your projects with just a few lines of JavaScript code, making it easy to add dynamic time displays to any web page.

**Usage**:
1. Include the Time-Moji library in your HTML file using a script tag.

```html
<script src="https://cdn.jsdelivr.net/npm/time-moji@latest/time-moji.js"></script>
```
or 

```html
<script src="https://unpkg.com/time-moji/time-moji.js"></script>
```
or Install with NPM
```
npm i time-moji
```

2. Use JavaScript to dynamically update the time display based on the current time and chosen display mode.

```javascript
Tmj.getTimeMoji(dateTime: Date, type: string)
```

| Parameter  | Description                           |
|------------|---------------------------------------|
| dateTime   | A Date object representing the time   |
| type       | A string indicating the display type ('clock' or 'landscape') {🕟,🌉} |


3. Customize the appearance and behavior of your time displays to suit your application's needs.

**Sample Usage**
```html
<div class="emoji-time"></div>
<script>
function updateTime() {
    const emoji = document.querySelector('.emoji-time');
    emoji.textContent = Tmj.getTimeMoji(new Date(),'clock');
}
window.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);
});
</script>
```

**Table of Emojis**

| Hour | Clock Emoji ('clock')| Landscape Emoji ('landscape') |
|------|-------------|-----------------|
| 0    | 🕛          | 🌉             |
| 1    | 🕐          | 🌉             |
| 2    | 🕑          | 🌉             |
| 3    | 🕒          | 🌉             |
| 4    | 🕓          | 🌉             |
| 5    | 🕔          | 🌄             |
| 6    | 🕕          | 🌇             |
| 7    | 🕖          | 🌇             |
| 8    | 🕗          | 🌇             |
| 9    | 🕘          | 🌇             |
| 10   | 🕙          | 🏙️             |
| 11   | 🕚          | 🏙️             |
| 12   | 🕛          | 🏙️             |
| 13   | 🕐          | 🏙️             |
| 14   | 🕑          | 🏙️             |
| 15   | 🕒          | 🏙️             |
| 16   | 🕓          | 🏙️             |
| 17   | 🕔          | 🏙️             |
| 18   | 🕕          | 🌆             |
| 19   | 🕖          | 🌆             |
| 20   | 🕗          | 🌉             |
| 21   | 🕘          | 🌉             |
| 22   | 🕙          | 🌉             |
| 23   | 🕚          | 🌉             |

When 30min passed:

| 0min Emoji | 30min Emoji |
|----------------|----------------|
| 🕐             | 🕜             |
| 🕑             | 🕝             |
| 🕒             | 🕞             |
| 🕓             | 🕟             |
| 🕔             | 🕠             |
| 🕕             | 🕡             |
| 🕖             | 🕢             |
| 🕗             | 🕣             |
| 🕘             | 🕤             |
| 🕙             | 🕥             |
| 🕚             | 🕦             |
| 🕛             | 🕧             |

Any error will return '🚨' 

**Get Started**:
Visit the Time-Moji [GitHub repository](https://github.com/Aizhee/Time-moji) to learn more and get started with integrating dynamic time displays into your web applications.

**License**:
Time-Moji is licensed under the MIT License, allowing you to use and modify the library freely in both personal and commercial projects.

---

Feel free to adjust the description further if needed!

---

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/O4O0XNVKI)