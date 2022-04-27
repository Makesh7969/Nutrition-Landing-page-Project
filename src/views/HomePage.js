import React from "react";
import { Header } from "./Header";
import firstImage from "../assets/dutee-chand.jpg";
import RunnerImage from "../assets/runner.jpeg";
import DrinkingImage from "../assets/drinking.jpg";
import FoodImage from "../assets/low-fodmap-diet-foods.jpg";
import AthletImage from "../assets/athlets.jpeg";
import { LayoutOne } from "../components/LayoutOne";
import { LayoutTwo } from "../components/LayoutTwo";
import { LayoutThree } from "../components/LayoutThree";
import { LayoutList } from "../components/LayoutList";

export const HomePage = () => {
  return (
    <>
      <Header />
      <LayoutOne
        image={firstImage}
        heading="SPORTS NUTRITION:"
        paragraph="Sports nutrition can be complicated by media stories, company
      marketing efforts, and self-proclaimed specialists. The finest
      tool we have for determining how something affects our health is
      good science. Finding out what works is generally the result of
      years of research from multiple disciplines, rather than a single
      study. You should study sources that use the finest scientific
      data available while taking into account accumulated scientific
      knowledge in that field when evaluating a diet, health claims,
      exercise regimen, behaviours, or items."
      />
      <LayoutTwo
        image={RunnerImage}
        heading="Nutritional Strategies for Athletic Performance and Health"
        paragraph="Athletes should be aware of healthy nutrition for both short- and long-term health, but they require different tactics than the general public to satisfy the demands of their sport. Athletes must also adopt strong sports nutrition habits in order to perform well. Here's a rundown to assist athletes in selecting the ideal foods for their health and performance."
      />
      <LayoutOne
        image={FoodImage}
        heading="What Protein Do I Require?"
        paragraph="Although the majority of people get adequate protein, many may improve their protein sources and how they arrange their protein intake throughout the day. Many people, for example, eat too much protein at night and too little in the morning. To help control blood glucose levels and feel fuller for longer, almost everyone can benefit from having some protein in most meals and snacks. Another group that could benefit from greater protein distribution is athletes."
      />
      <LayoutTwo
        image={DrinkingImage}
        heading="You eat to fuel your workouts, but what about the rest of your diet?"
        paragraph="Most athletes understand the importance of picking the correct meals and beverages to fuel workouts and encourage recovery, yet there appears to be more variation in their overall diet. Outside of exercise, there are other advantages to improving your diet. The information in this article will assist you in selecting foods that will boost your overall health."
      />
      <LayoutOne
        image={AthletImage}
        heading="Athletes' Iron Requirements: Who Needs More, and How Can You Get It Through Your Diet?"
        paragraph="Iron is a component of haemoglobin in the blood and myoglobin in the muscles, which helps carry oxygen to cells. Athletes are typically concerned about iron. Low haemoglobin levels can cause fatigue and a reduction in aerobic capacity, causing some athletes to believe that supplementing with iron will help them perform better. Some endurance athletes do take iron supplements regardless of their iron status, despite the fact that too much iron can be harmful to their health. True iron deficient athletes, on the other hand, may be unaware of their condition, and dietary adjustments or iron supplements may help them feel less fatigued or perform better. However, dietary adjustments are difficult to make since iron absorption is a complex performance."
      />
      <LayoutThree
        heading="Sports Nutrition what for it used?"
        paragraph="What you eat before, during, and after your workout can have a huge impact on how well you perform and recover."
      />
      <LayoutThree
        heading="Carbohydrates, the Fuel of Athletes:"
        paragraph="Muscle glycogen is an endurance athlete's preferred fuel during activity (stored carbohydrate). Endurance or high-intensity workouts deplete glycogen stores, therefore it's critical to ingest carbohydrates to replenish them. The more active you are, the more carbohydrate you require: high-performance athletes may require twice as much as recreational athletes. Athletes who don't eat enough carbohydrates to match their exercise volume don't perform as well, according to study."
      />
      <LayoutThree
        heading="CImprove Your Gut Health!"
        paragraph="You can train your gut to absorb and provide the fuel you need to compete in the same way you train your muscles for race day. It's critical to practise fuelling techniques while exercising (for example, don't undertake 2+ hour workouts with only water). Waiting until race day to try your carbohydrate fuelling approach means your gut won't be able to absorb all of the carbs, putting you at risk for gastrointestinal problems."
      />
      <LayoutThree
        heading="Long Workouts and Events: Fueling Strategies:"
        paragraph="New research shows that the quickest distance performances necessitate a high carbohydrate intake. Although prior study revealed that the body's carbohydrate absorption limit was 60 grams per hour, new research shows that combining two different forms of carbs allows the body to absorb up to 90 grams per hour. Note that this high carbohydrate intake is likely reserved for top athletes who can maintain high energy output/paces close to their maximum for long events in the 2–2.5 hour range; leisure athletes should aim for the typical 30-60g/hour. If you're running a marathon, aim for 60 g carbohydrates per hour if your time is under 3 hours, and 30 g carbohydrates per hour if your time is over 4 hours. It is critical that you practise and practise your nutrition approach throughout lengthy training runs so you don't have stomach problems on race day. The gluten-free diet has become increasingly popular, and many athletes have jumped on board in the hopes of improving their health, digestion, and athletic performance."
      />
      <LayoutList
        heading="Long-term Nutrition Goals for Athletes"
        firstList="Energy intake to meet the energy demands of training"
        secondList="The replenishment of muscle and liver glycogen with dietary carbohydrates"
        thirdList="Protein intake for growth and repair of tissue, particularly muscle"
        fourthList="Adequate overall diet (ex/ proteins, antioxidant vitamins) to maintain a healthy immune system"
        fifthList="Hydration"
        sixthList="Appropriate weight and body composition"
      />
      <LayoutList
        heading="Short-term Nutrition Goals for Athletes"
        firstList="Consumption of food and beverages to delay fatigue during training and competition"
        secondList="Minimization of dehydration and hypo hydration during exercise"
        thirdList="Use of dietary strategies known to be beneficial for performance (such as pre competition meal, caffeine intake, or carbohydrate loading)"
        fourthList="Adequate overall diet (ex/ proteins, antioxidant vitamins) to maintain a healthy immune system"
        fifthList="Intake of nutrients that support recovery"
        sixthList="Appropriate timing of nutrients"
      />
      <LayoutThree
        heading="Hydration is essential"
        paragraph="Sweating causes the loss of fluid and electrolytes (sodium and potassium) during strenuous exercise. Dehydration can cause fatigue, as well as a loss of muscle strength, energy, concentration, and coordination, so you should drink to replenish fluid and electrolytes. Sports drinks replace electrolytes lost through sweating and provide carbohydrates. Water is appropriate (and sometimes preferred) for non-vigorous activities or those that last less than an hour."
      />
      <LayoutThree
        heading="Do I require a sports drink"
        paragraph="Sports drinks are ideal for high-intensity, long-duration training or racing. Most sports drinks contain a combination of carbohydrates that are easily absorbed through the small intestine. The carbohydrate content (6 to 8%) ensures that the drink will easily pass through your stomach. The sodium in sports drinks also aids in fluid absorption across the small intestine. High carbohydrate snacks and water are fine for easier workouts. Just make sure you practise using a sports drink during workouts if you intend to use one during an event."
      />
      <LayoutThree
        heading="Is it possible for me to produce my own sports drink?"
        paragraph="You can add a pinch of salt (1/8 tsp per 2 cups) and dilute combinations of fruit juices to 100 calories per 16 ounces (approximately 1/3 juice to 2/3 water). This drink, however, has a lot of fructose, which isn't usually as well tolerated as the sugars found in most sports beverages, especially during strenuous exertion. Diluted fruit juice is a convenient solution for most purposes."
      />
      <LayoutThree
        heading="What Should I Eat Before Exercising?"
        paragraph="Eating before exercising can be difficult: determining how to fuel for workouts in the early morning, during lunch breaks, or after dinner takes some thought and practise. But it's worth it to find a plan that works for you, because the food you eat before your workout can help fuel your muscles and brain, replenish glycogen stores, increase motivation, decrease perceived exertion, boost your endurance and performance, and set the stage for faster post-workout recovery. What you eat (or don't eat!) can, on the other hand, cause lightheadedness, fatigue, cramping, or gastric distress."
      />
      <LayoutThree
        heading="Refueling for Recovery After Workouts"
        paragraph="Rest allows your body's systems to adapt to the stresses of training, hopefully making you stronger and faster. Many athletes, however, are unaware that by consuming the right foods or fluids at the right times following a workout, you can maximise your training gains, speed up the recovery process, and improve subsequent performance."
      />
      <LayoutList
        heading="Basic Nutrition Standards and Guidelines"
        subText="Sports nutrition principles are based on sound general nutrition principles"
        paragraph="Can be modified to reflect demands of training and competition"
        firstList="Dietary Reference Intakes (DRI)"
        secondList="Dietary Guidelines for Americans"
        thirdList="MyPlate (previously MyPyramid)"
        fourthList="Other meal planning systems"
      />
      <LayoutList
        heading="The DRIs"
        firstList="DRIs were developed for the general population, but also apply to athletes"
        secondList="Energy, fluid, Na may be higher for athletes than general population"
        thirdList="DRI is the current standard "
        fourthList="RDA is one of the reference values of DRIs"
        fifthList="When an RDA cannot be determined, the AI becomes the reference value for the DRI"
      />
      <LayoutList
        descriptionList
        heading="Dietary Guidelines for Americans, 2010"
        firstDescription="Encompass Two Overarching Goals:"
        firstDescriptionData="Maintain calorie balance over time to achieve and sustain healthy weight"
        secondDescriptionData="Focus on consuming nutrient-dense foods and beverages"
        secondDescription="Key Recommendations"
        firstDescriptionSecondData="Balancing Calories to Manage Weigh"
        secondDescriptionSecondData="Foods and Food Components to Reduce"
        thirdDescriptionSecondData="Foods and Nutrients to Increase"
        fourthDescriptionSecondData="Building Healthy Eating Patterns"
      />
      <LayoutList
        heading="Dietary Supplements"
        firstList="Dietary Supplement Health and Education Act (DSHEA) - law passed in 1994 that governs dietary supplements in the U.S."
        secondList=" Supplement is defined as a “vitamin, mineral, herb, botanical, amino acid, metabolite, constituent, extract, or a combination of any of these ingredients” (FDA, 1994)"
        thirdList="The law does NOT ensure or require safety or effectiveness"
        fourthList="Supplements cannot claim to treat, prevent, diagnose, or cure a disease."
      />
      <LayoutList
        heading="Why do athletes take supplements?"
        firstList="Consumption of poor diet"
        secondList="Physical demand of training & competition"
        thirdList="Teammates and competitors are taking supplements"
        fourthList="Recommendation by physician, coach or parent"
        fifthList="To avoid sickness"
        sixthList="Lack of time to prepare meals"
        seventhList="To overcome injury"
        eightList="To enhance overall health"
      />
      <LayoutThree
        heading="Summary"
        paragraph="Nutrition plays an important role in all aspects of a person's life. All nutrients are required by their bodies and Dietary supplements are widely used by athletes, but are not well regulated. Sports nutrition recommendations should be evidence-based, Practitioners must understand and respect the limitations of their training, skills, and knowledge. Many people who work with athletes are certified or licensed"
      />
      <LayoutThree
        heading="Resources:"
        paragraph="Burke, L. (2007). Practical sports nutrition.
        Cotugna, N., Vickery, C. E., & McBee, S. (2005). Sports nutrition for young athletes. The Journal of School Nursing, 21(6), 323-328.
        Maughan, R. J. (Ed.). (2013). Sports nutrition (Vol. 19). John Wiley & Sons.
        Campbell, B., Kreider, R. B., Ziegenfuss, T., La Bounty, P., Roberts, M., Burke, D., ... & Antonio, J. (2007). International Society of Sports Nutrition position stand: protein and exercise. Journal of the international society of sports nutrition, 4(1), 1-7.
        Burke, L., & Deakin, V. (2010). Clinical sports nutrition. McGraw Hill.
        Dunford, M. (2006). Sports nutrition: A practice manual for professionals. American Dietetic Associati."
      />
    </>
  );
};
