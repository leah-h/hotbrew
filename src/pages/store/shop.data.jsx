const SHOP_DATA = [
  {
    categoryId: 1,
    title: "Coffee",
    routeName: "coffee",
    items: [
      {
        productId: "8rqYuEnD0F9PD8OLz5Z2",
        "size ": "12oz.",
        imageUrl:
          "https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        description:
          "Named after John Coltrane’s Giant Steps, this dense and substantial coffee is not unlike the jazz visionary's signature \"sheets of sound.” Our darkest blend, comprising organic coffees from Uganda, Papua New Guinea, and Sumatra, is downright viscous in the cup. Just like Coltrane’s ability to cascade into high-pitched octaves with maximum control, this coffee’s inflections of stone fruit lighten without losing focus. Improvisations of milk or cream—in any proportion—shine.",
        categoryId: 1,
        category: "coffee ",
        price: "$10",
        size: "12oz",
        type: "blend",
        flavorProfile: "Cocoa, toasted marshmallow, graham cracker",
        productName: "Giant Steps",
      },
      {
        productId: "D0bKBcIhxAwHtgCsgVsr",
        category: "coffee ",
        type: "single origin",
        flavorProfile: "Molasses, Orange Zest, chocolate",
        size: "12oz.",
        productName: "Honduras Catracha Doris Alicia Benitez",
        categoryId: 1,
        price: "$24",
        description:
          "This bright, caramelly coffee is grown high in the mountains of Honduras where the clouds are so thick they can obscure the sunrise. It’s our choice to highlight this year by a single grower from the exceptional Catratcha Community Company. The nonprofit and coffee collective has single-handedly put the Honduran community of Santa Elena on the coffee map, while improving the lives of its farmers. This small lot comes from grower Doris Benitez’s personal plot, which she tends to in addition to the farm she and her husband Mateo share. It’s our third year offering her coffee as its own lot because it’s that exceptional.",
        imageUrl:
          "https://images.unsplash.com/photo-1525088553748-01d6e210e00b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
      },
      {
        productId: "J6otVfLBsgze2EWaiiLh",
        productName: "Uganda Kapkwai Sipi Falls Natural",
        "category ": "coffee ",
        size: "12oz.",
        price: "$22",
        imageUrl:
          "https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        description:
          "Mt. Elgon is the most exciting place for coffee in Uganda, and Sipi Falls, a wet mill named after local waterfalls, is unlocking this promising terroir and producing rich, complex coffees. The 8,000 farmer members of the mill grow coffee—usually Kenyan varieties—intercropped with fruits, vegetables, and shade trees and all maintain organic standards, which is quite the feat. Sipi Falls is never afraid to innovate in the name of deliciousness. This natural-processed coffee from Kapkwai, a smaller section of Mt. Elgon, is one such experiment gone beautifully right-—it’s fruit driven to the point of being jammy with a surprising florality and mandarin-like sweetness.",
        type: "single origin",
        categoryId: 1,
        flavorProfile: "Strawberry, Vanilla, Plum",
      },
      {
        productId: "KO5aJ67aGoJNQa2HGSOH",
        category: "coffee ",
        size: "12oz.",
        categoryId: 1,
        description:
          "This brightly floral washed Ethiopia grows in old-growth highland rainforests near Gera in the western part of the country. There, small lot farmers usually bring their cherries to cooperatives. Michael Omran is doing something different. He started Abana Estate to produce excellent coffee and support community work. Since its founding about a decade ago, it has succeeded spectacularly. He and his team promote biodiversity on the farm and process cherries in an on-site water-recycling wet mill, all while funding medical care and infrastructure projects for local villagers. Look for a naturally processed coffee from Abana Estate with our holiday releases.",
        price: "$23",
        imageUrl:
          "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2500&q=80",
        flavorProfile: "Yuzu, Peach, Jasmine",
        productName: "Ethiopia Gera Abana Estate Washed",
        type: "single origin",
      },
      {
        productId: "LLFuhigFAKx6YA5P3qYW",
        category: "coffee",
        type: "blend",
        size: "12oz.",
        description:
          "While many of our coffee blends are noteworthy for their sturdiness, the glassy and floral Beta Blend is cut from a different cloth. What began as a collaboration between our sourcing and digital teams has evolved into a delicate counterpoint to our heftier blends that is available for online purchase exclusively.",
        categoryId: 1,
        productName: "Beta Blend",
        flavorProfile: "Candied orange, milk chocolate, white peach",
        price: "$17",
        imageUrl:
          "https://images.unsplash.com/photo-1442550528053-c431ecb55509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      },
      {
        productId: "MR30UwQLavQSiHfYaJuJ",
        productName: "Ethiopia Gera Abana Estate Natural",
        size: "12oz.",
        flavorProfile: "Strawberry, lemonzest, jasmine",
        imageUrl:
          "https://images.unsplash.com/photo-1553698249-0e3f9263ffa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        price: "$24",
        category: "coffee",
        description:
          "Natural processing is the oldest way to turn coffee cherry into a coffee bean. Originating in Ethiopia centuries ago, the technique involves drying the fruit past the point of a raisin to extract the two seeds inside. Today, Abana Estate has one of the most exacting approaches to the method going. They mound rainforest-grown heirloom Arabica cherry into piles, rotating them every few hours for even drying beneath the sun. In the cup, the polychromatic result frees you from any fixed idea of what coffee should be—and reveals what coffee has been all along.",
        type: "blend",
        categoryId: 1,
      },
      {
        productId: "T4kBqpRgOy5ZPQgF3Gu1",
        imageUrl:
          "https://images.unsplash.com/photo-1520516472218-ed48f8ff3271?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        type: "espresso",
        descripton:
          "We developed our darkest espresso for the launch of our first brick-and-mortar in our friend Loring’s garage in Hayes Valley. Years later, it remains the standard espresso in all of our cafes. Lower-toned and minimally bright, Hayes Valley Espresso pulls a straight shot with a voluptuous tawny crema and a somewhat dangerous-looking viscosity. Milk, in any quantity, adds romance to the coffee’s brooding aspects, bringing out the inherent chocolate and adding a smooth, rounded touch.",
        size: "12oz.",
        category: "coffee",
        price: "$17",
        productName: "Hayes Valley Espresso",
        categoryId: 1,
        flavorProfile: "Baking chocolate, orange zest, brown sugar",
      },
      {
        productId: "XCOeXyUV3KIU3ZjsDTWd",
        productName: "Bella Donovan",
        flavorProfile: "Raspberry, chocolate, molasses",
        size: "12oz.",
        price: "$17",
        type: "blend",
        categoryId: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1529569746116-50b8c3dac4d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        category: "coffee ",
        description:
          "Bella Donovan is the wool sweater of our blends—comforting, cozy, and enveloping. Our most popular blend, Bella is a variation of the archetypal Moka-Java pairing, in which a wild and jammy natural from Ethiopia finds balance with more substantive coffees from Sumatra and Peru. It stands on the darker side of things, weathers the rigors of the automatic drip machine well, and stands up to milk or cream—though it is just as elegant black.",
      },
      {
        productId: "Z0OPpcjLZNkHI3NUOYo8",
        descripton:
          "Natural processing is the oldest way to turn coffee cherry into a coffee bean. Originating in Ethiopia centuries ago, the technique involves drying the fruit past the point of a raisin to extract the two seeds inside. Today, Abana Estate has one of the most exacting approaches to the method going. They mound rainforest-grown heirloom Arabica cherry into piles, rotating them every few hours for even drying beneath the sun. In the cup, the polychromatic result frees you from any fixed idea of what coffee should be—and reveals what coffee has been all along.",
        price: "$24",
        flavorProfile: "Molasses, Orange Zest, Black Cherry",
        category: "coffee",
        productName: "Ethiopia Gera Abana Estate Natural",
        size: "12oz.",
        type: "single origin",
        imageUrl:
          "https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2500&q=80",
        categoryId: 1,
      },
      {
        productId: "s4zjF21MUrIt1akPB9CZ",
        category: "coffee",
        price: "$17",
        productName: "17ft Ceiling Espresso",
        flavorProfile: "Caramel, almond, dried cherry",
        imageUrl:
          "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1228&q=80",
        type: "espresso",
        description:
          "Named for the building specs in our Mint Plaza cafe in San Francisco, this espresso blend is pure pleasure. We reverse-engineered a blue-collar Italian espresso blend (yes, Robusta!) with high-quality organic coffee to make a sturdy, crema-heavy, and unpretentious espresso. If Hayes Valley Espresso is like consuming a volume of In Search of Lost Time in liquid form, then 17ft Ceiling is like flipping through The New Yorker—edifying without being overly taxing.",
        categoryId: 1,
        size: "12oz.",
      },
      {
        productId: "uJ4a3LfdE4u1TISG12sm",
        type: "blend",
        imageUrl:
          "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        size: "12oz",
        price: "$17",
        flavorProfile: "Golden raisin, winey blueberry, lemon zest",
        "size ": "12oz.",
        description:
          "Three Africas marries the radiant fruit of two coffees from Ethiopia, one washed and one natural, with the balance and authority of a washed coffee from Uganda. Each component excels on its own, but together, they traverse boundaries. No matter the brew method, this blend, which is our brightest, has good body and an approachable complexity that takes to cream well, but stands just as radiantly on its own.",
        productName: "Three Africas",
        category: "coffee ",
        categoryId: 1,
      },
    ],
  },
  {
    categoryId: 2,
    title: "brewing",
    routeName: "brewing",
    items: [
      {
        productId: "BzalgmlYtUSsRqntdFNl",
        category: "brewing",
        type: "cups and mugs",
        description:
          "Tailored for Blue Bottle by the UK company Ecoffee Cup, our new EcoCup is designed to deliver a sleek, reusable takeaway option that is a pleasure to use. Built from bamboo fiber and other plant-based materials, the environmentally friendly cup is dishwasher safe, and looks as good as it feels in the hand.",
        size: "12oz.",
        price: "$16",
        flavorProfile: "Our stylish reusable EcoCup",
        categoryId: 2,
        productName: "Hot Brew x Ecoffee Cup",
        imageUrl:
          "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1559170039/br6j48cwehezs98y8knd.jpg",
      },

      {
        productId: "HFfQEupXhpxqk8l7vBEZ",
        type: "cups and mugs",
        description:
          "MiiR is to engineering what Blue Bottle is to coffee: We both believe beauty is integral to design. Featuring nontoxic materials and a lid designed to prevent splashing, this handsome Mug’s innovative thermal insulation maintains a steady internal temperature, so hot drinks stay hot, and NOLAs stay refreshing, for hours on end.  Like Blue Bottle, MiiR is committed to giving back. A portion of the proceeds from the sales of our MiiR Travel Mugs fund projects that support coffee-growing communities around the world.",
        price: "$27",
        flavorProfile:
          "Keep your hot drinks hot and your cold drinks refreshing",
        productName: "MiiR Travel Mug",
        imageUrl:
          "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1515797360/rpprii1bck55ly5boj5c.jpg",
        category: "brewing",
        size: "12oz.",
        categoryId: 2,
      },
      {
        productId: "LK74uxE6N7KZjwzVM4wI",
        type: "cups and mugs",
        description:
          "From Japan, the Hario cold brew bottle joins form and function to make luscious cold brew effort-free. All you need is ground coffee, clean water, and 8 to 12 hours in the refrigerator. The ultrafine filter means the cold brew pours out crystal clear. Bonus: the filter is easily removable. Take it out and the glass and silicone bottle transforms into a stunning carafe for any beverage.",
        price: "$35",
        flavorProfile: "Add coffee, water, and time",
        categoryId: 2,
        size: "750ml",
        category: "brewing",
        imageUrl:
          "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1559344002/red7qn8e93h71ftu6wrh.png",
        productName: "Hario Cold Brew Bottle",
      },
      {
        productId: "RQAcL7KPSPBVnomvydvB",
        flavorProfile: "Add coffee, water, and time",
        size: "OS",
        descripton:
          "Founded by Los Angeles–based designer Takuhiro Shinomoto, Hasami Porcelain elevates functional everyday objects into moments of aesthetic delight. The studio is named in honor of the town of Hasami in northern Japan, where traditional ceramics have been crafted since the Edo period four hundred years ago. We’ve partnered with Hasami to bring you this coffee set, which contains all you need to make coffee the center of an entire morning’s conversation. It starts with two sleek, stackable Fog Grey cups and two ash-wood saucers (which double as lids). The set is rounded out with a matching Fog Grey porcelain creamer and sugar bowl.",
        productName: "Hot Brew x Hasami Coffee Service",
        type: "cups and mugs",
        category: "brewing",
        price: "$150",
        categoryId: 2,
        imageUrl:
          "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1573155504/ooofx1tvzjczvxrjrlmd.jpg",
      },
      {
        productId: "gNLWkZpxWbGvY68kHbyR",
        categoryId: 2,
        size: "12oz.",
        price: "$25",
        imageUrl:
          "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1486399968/gb5fkqjkqw81eyuf3iav.jpg",
        productName: "Hot Brew Mug",
        flavorProfile: "For minimalistic mornings when simplicity is key",
        category: "brewing",
        description:
          "A study in design simplicity, this elegant mug is a beautiful addition to your morning routine. Designed by Claska in Japan, Blue Bottlers in Tokyo call this the “Kiyosumi” after our cafe in the Kiyosumi neighborhood. Its clean lines and smooth glaze mirror the minimalism of that space—pale surfaces, gleaming windowpanes, and subtle curvature.",
        type: "cups and mugs",
      },
      {
        productId: "rZSguEgZG2NCHSSVLm9K",
        price: "$25",
        categoryId: 2,
        type: "cups and mugs",
        imageUrl:
          "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1515797612/jpgu2u8xxtirduiqchvt.jpg",
        description:
          "MiiR is to engineering what Blue Bottle is to coffee: We both believe beauty is integral to design. Featuring nontoxic materials and a lid designed to prevent splashing—perfect for transit of all types—this Cup’s thermal insulation maintains a steady internal temperature, so hot drinks stay hot, and NOLAs stay refreshing, for hours on end.  Like Blue Bottle, MiiR is committed to giving back. Sales from our MiiR Travel Mugs benefit Splash, an organization that brings clean drinking water to school children in Addis Ababa, Ethiopia—a country from which we source some of our most beloved coffees.",
        size: "12oz.",
        category: "brewing",
        productName: "MiiR Commuter Cup",
        flavorProfile:
          "Keep your hot drinks hot and your cold drinks refreshing",
      },
    ],
  },
  {
    categoryId: 3,
    title: "accessories",
    routeName: "accessories",
    items: [
      {
        productId: "X3c7ZDsYx1BwEIqKk5jj",
        flavorProfile:
          "A hand-powered grinder that rivals the finest electric versions",
        type: "accessories",
        description:
          "This remarkable hand-powered grinder is made by Hario and features ultra-sharp ceramic conical burrs. The burrs are adjustable and lock into place when you've found that sweet spot, grind-wise. There is no motor; it is fully powered by elbow grease. But the quality of the grind is unsurpassed by electric grinders that cost ten times as much. A compact grinder for travel, and wonderful for making a quiet cup of coffee at home.",
        size: "OS",
        category: "accessories",
        productName: "Hario Skerton+ Ceramic Coffee Mill",
        categoryId: 3,
        price: "$50",
        imageUrl:
          "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1573588588/ij2f9gnn82dberlxtkjp.jpg",
      },

      {
        productId: "ZXJ8KAR6xvVgEQ2Iaa4i",
        flavorProfile: "A great digital scale for brewing at home",
        categoryId: 3,
        type: "accessories",
        productName: "Hario Scale",
        category: "accessories",
        size: '7.5" x 4.75" x 1.2" ',
        imageUrl:
          "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1581967222/flnhhaqbrijkhmfdsyng.jpg",
        description:
          'Manufactured by our friends over at Hario Japan, this scale is durable, hyper-compact and quite sensitive. It measures in tenths of a gram, includes a built-in timer, and has a maximum capacity of 2 kilos (4.4 pounds). It comes in one color, matte black, which for our money is the best possible color a scale can come in. It takes two AAA batteries, which are included; and its modest dimensions – 7.5" by 4.75" by 1.2" – make it a pleasingly practical option for travel.',
        price: "$60",
      },
      {
        productId: "ekfCCeVTwjtS3WCLt6aY",
        category: "accessories",
        type: "accessories",
        description:
          "The Stagg™ Pour Over Kettle is for the aesthete who wants a tool to be as useful as it is elegant. Built for gas, electric, and induction stovetops, Stagg™ Stovetop Pour Over Kettle’s ergonomic grip and counterbalanced handle make for an unwavering pour, while its graceful spout ensures an even flow rate with to-the-drop precision. Available in matte black, your eyes will be satiated even before your cup of coffee is ready to drink.",
        flavorProfile:
          "Limited-edition fog grey, made exclusively for Hot Brew",
        size: "OS",
        imageUrl:
          "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1533235207/coco8ozcqkkfzse9lpws.jpg",
        categoryId: 3,
        price: "$79",
        productName: "Fellow Stagg Stovetop Pour-Over Kettle",
      },

      {
        productId: "i8EPZIWJhhP0pKW9ugpJ",
        price: "$12",
        imageUrl:
          "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1581966494/iupdczthffwo7tgkh1pa.jpg",
        flavorProfile: "The same pitchers we use in our cafés",
        productName: "Steaming Pitcher, 20oz",
        type: "accessories",
        size: "OS",
        categoryId: 3,
        category: "accessories",
        description:
          "Nothing too mysterious here. Just a simple 18-8 food grade stainless steel, straight-sided, thin-lipped, pitcher. The same model we use in all of our shops. We use the 20 oz. for the Latte and Mocha.",
      },
      {
        productId: "mZ3wFC9sfZgrlYGmGwal",
        category: "accessories",
        imageUrl:
          "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1581965890/uhceu8ugzxcjnilca35w.jpg",
        categoryId: 3,
        flavorProfile:
          "Same as it was in 1941, equal parts brilliance and utility",
        price: "$44",
        productName: "Chemex 6-Cup",
        type: "accessories",
        description:
          "The Chemex coffeemaker is an elegant, one-piece, hourglass shaped vessel made of high quality, heat resistant glass. NOTE: Does not include filters.  Few products in this century can match the flawless blending of design and function of the Chemex®. Its visual elegance has earned it a place in the permanent collection of New York's Corning Museum of Glass. The Chemex® coffeemaker was also selected by the Illinois Institute of Technology as one of the 100 best designed products of modern times. The Chemex® coffeemaker, together with Chemex-Bonded® Coffee Filter, makes perfect coffee. Clear, pure, flavorful and without bitterness or sediment every time. The coffee only comes in contact with the scientifically designed filter and non-porous glass. With the Chemex® method, you can make coffee as strong as you like without bitterness. Perfect for iced coffee and coffee flavoring for gourmet recipes. Because of its purity, Chemex® brewed coffee can be covered and stored in the refrigerator for reheating...without losing its flavor!",
        size: "6cups",
      },
    ],
  },
  {
    categoryId: 4,
    title: "gift",
    routeName: "gift",
    items: [
      {
        productId: "a8y8sv7DUiuFQczbP9ML",
        price: "$35",
        size: "6oz",
        flavorProfile: "A heartfelt pairing: chocolate and coffee",
        productName: "Blue Bottle x Dandelion Chocolate",
        imageUrl:
          "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1581005006/gejhycstncmrtmdkuxie.jpg",
        categoryId: 4,
        description:
          "Chocolate and coffee are one of the world’s great duets. To find a pairing for our cozy Bella Donovan blend, we went to our friends at Dandelion Chocolate because they think about chocolate the way we do coffee—as the seed of a tropical fruit capable of revealing a stunning spectrum of flavors. After tasting many of their excellent bars, we selected the Colombia Tumaco for its natural creaminess and fruitiness that pulled out the raspberry notes in the coffee. You’ll swear they were made for each other.",
        type: "Gift Pairing",
        category: "gift",
      },
    ],
  },
];

export default SHOP_DATA;
