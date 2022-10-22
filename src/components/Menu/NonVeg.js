import React from "react";
import MenuList from "../../container/MenuList/MenuList";
import "./NonVeg.css";
const NonVeg = () => {
	const nonVegItems = {
		"Mango Samsum Roll":
			"https://th.bing.com/th/id/R.457cb97b08f6bf71c21f586d45a2dbdb?rik=a5KgWHthIoFRGw&pid=ImgRaw&r=0",

		"Bambo Jangiri":
			"https://th.bing.com/th/id/R.2b2d66e8e1e6ada589222ee90a2d79a4?rik=gmWdkiEKV2Fqkw&riu=http%3a%2f%2fmaheshgrandbakery.com%2fimages%2fgallery%2fsweets%2fJangiri_mini.jpg&ehk=pN8UTxehbVNc6IpoH40FOG6zW20qJZDBzyo%2baFXUljA%3d&risl=&pid=ImgRaw&r=0",

		"Veg Cheese Ball":
			"https://th.bing.com/th/id/R.095a9d281983040599357d12bc9d0fee?rik=m6QNeLar6949Tg&pid=ImgRaw&r=0",

		"Veg Kebab Mayonnaise":
			"https://www.martat.fi/uusimaa/wp-content/uploads/sites/16/2019/04/kesakurpitsa-pallot.jpg",

		"Veg Malabar Gravy":
			"https://th.bing.com/th/id/R.33e6430a52ff43ffaa19f656bd62a783?rik=yLNVbttvQyn6BQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-qDuGzAfwEWI%2fUcwqzWW6TfI%2fAAAAAAAADCU%2fUD7jL7eTnj4%2fs1600%2fmalabar%2b2.jpg&ehk=AL8q7thYcqTSDVWDd60LdYrnaHBSE2WtwyyoI0x9wZo%3d&risl=&pid=ImgRaw&r=0",

		"Kadapa Kara Dosa": "https://i.ytimg.com/vi/TCa86XiMYsY/maxresdefault.jpg",

		"Sivakashi Dosa": "https://i.ytimg.com/vi/A1yam3sfFwo/maxresdefault.jpg",

		"Plain Dosa":
			"https://th.bing.com/th/id/R.a7c2d1eea9f64b626a9582acf227e33a?rik=v0A3%2fEL2UPfyOg&pid=ImgRaw&r=0",

		"Veg 65 Biriyani":
			"https://th.bing.com/th/id/OIP.iibQZ-WcmY3WbzoPKBqUqwHaFy?pid=ImgDet&rs=1",

		"Coconut Milk Appam":
			"https://th.bing.com/th/id/R.3815a1d2689d0a072a1ecc471a1f643d?rik=fAx%2fK5Oqub%2bPGQ&pid=ImgRaw&r=0",

		"Tirunelveli Groom Sodhi":
			"https://th.bing.com/th/id/R.41c0b91fecea07b02521f0ea61413837?rik=OLXp0Dmtrj0Dkw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-aZCuMDYyX3Y%2fTzMHsecIQlI%2fAAAAAAAACRM%2fWrTrZzgVdic%2fw1200-h630-p-k-no-nu%2fco%2b1%2b019.JPG&ehk=eWEuugu9prcG%2bY0FmuE%2fltBG9RlN3VP9iW2S7d0okU0%3d&risl=&pid=ImgRaw&r=0",

		"Rice and Sambar":
			"https://th.bing.com/th/id/OIP.U2vFU9egxphMkjuXhYRCSAHaEK?pid=ImgDet&rs=1",

		"Veg Kadai Gravy":
			"https://th.bing.com/th/id/R.0c732db44265622266c66ba5c99ae511?rik=m%2bK7xNis15sXWg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Svhv1SF3GS0%2fVpEZ2lozPTI%2fAAAAAAAAHkk%2fKjvFGZicqEE%2fs1600%2fDSC_1378.JPG&ehk=PGur49OgXQco3%2bFk542Y5s4RwBgT7DJpxakOmWvFOww%3d&risl=&pid=ImgRaw&r=0",

		"Kerala puttu":
			"https://th.bing.com/th/id/R.411d1ef20b0f379f8fc79079c71b2cff?rik=UGM8SOsixI5g4Q&pid=ImgRaw&r=0",

		Porridge:
			"https://th.bing.com/th/id/R.6be85017b11d7a9222d882572c1e321a?rik=ffd6qxoMavLs9Q&pid=ImgRaw&r=0",
	};
	return (
		<div className="nonVeg-menu-container">
			<div className="nonVeg-title">Non Vegetarian</div>
			<div className="nonVeg-menu-list">
				{Object.keys(nonVegItems).map((each) => (
					<MenuList value={each} imageUrl={nonVegItems[each]} />
				))}
			</div>
		</div>
	);
};

export default NonVeg;
