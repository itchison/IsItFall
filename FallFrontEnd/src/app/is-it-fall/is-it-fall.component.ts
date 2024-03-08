import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FallMessage } from '../fall-message';

@Component({
  selector: 'app-is-it-fall',
  standalone: true,
  imports: [],
  templateUrl: './is-it-fall.component.html',
  styleUrl: './is-it-fall.component.scss'
})
export class IsItFallComponent implements OnInit {
  @Output() public setSeason = new EventEmitter<string>();
  public isFall = false;

  public fallMessage!: FallMessage;

  getFallMessage(): string {
    if (this.isFall) {
      return this.getFunnyFallMessage();
    } else {
      return this.getFunnyNonFallMessage();
    }
  }
  public ngOnInit() {
    this.isFall = this.getSeason() === 'fall';
    this.fallMessage = {
      id: 1,
      message: this.getFallMessage()
    };
    this.setSeason.emit(this.getSeason());
  }

  getFunnyNonFallMessage(): string {
    const messages = [
      "NOPE, JUST SUMMER HOLDING ON FOR DEAR LIFE.",
      "NEGATORY, WE'RE STUCK IN ETERNAL NON-FALL MODE.",
      "NAH, STILL WAITING FOR THE LEAVES TO GET THE MEMO.",
      "FALL? MORE LIKE FALLEN ASLEEP AND SKIPPED RIGHT OVER US.",
      "SORRY, WE'RE STILL IN 'SPRINGTIME ON STEROIDS' PHASE.",
      "NOT YET, WE'RE IN THE 'ETERNAL SEPTEMBER' ZONE.",
      "HAHA, NOPE, JUST ANOTHER DAY IN 'NOT FALL YET' LAND.",
      "IS IT FALL? MORE LIKE IS IT EVER GONNA BE FALL?",
      "FALL'S ON VACATION, WE'RE JUST HERE ENJOYING THE EXTENDED SUMMER.",
      "SORRY, STILL ROCKIN' THE SHORTS AND FLIP-FLOPS.",
      "IS IT FALL? NAH, JUST A LONG-TERM SUMMER FLING.",
      "FALL? MORE LIKE STUCK IN 'PERPETUAL JULY' MODE.",
      "NOT YET, WE'RE IN THE 'WAITING FOR PUMPKIN SPICE EVERYTHING' PHASE.",
      "FALL? STILL SEARCHING FOR THE SWITCH TO FLIP THE SEASON.",
      "NOPE, JUST ANOTHER DAY IN 'NOT QUITE AUTUMN' TOWN.",
      "IS IT FALL? ONLY IN OUR DREAMS, MY FRIEND.",
      "FALL? YOU MEAN 'DELAYED GRATIFICATION' SEASON?",
      "SORRY, STILL BUSY CHASING ICE CREAM TRUCKS, NOT LEAVES.",
      "NOT YET, WE'RE IN THE 'HOLDING ONTO SUMMER WITH BOTH HANDS' STAGE.",
      "FALL? MORE LIKE 'NOT YET READY TO COMMIT TO SWEATERS' TIME.",
      "NOPE, STILL IN THE 'WAITING FOR THE CRISP AIR' ZONE.",
      "FALL? STILL HANGING OUT IN THE 'FALL WHO?' TERRITORY.",
      "SORRY, WE'RE IN THE 'DENIAL ABOUT THE END OF SUMMER' PERIOD.",
      "IS IT FALL? NOT UNTIL WE FIND OUR MISSING JACK-O'-LANTERN.",
      "FALL? YOU MEAN 'WISHFUL THINKING' SEASON?",
      "NOT YET, WE'RE STILL IN THE 'LONG LIVE SHORTS AND T-SHIRTS' ERA.",
      "FALL? STILL BUSY SIPPING ON ICED COFFEE, NOT PUMPKIN SPICE LATTES.",
      "SORRY, STILL ENJOYING THE SUNSHINE BEFORE THE LEAVES FALL.",
      "IS IT FALL? MORE LIKE 'WHERE'S THE NEAREST BEACH?' TIME."
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }
  getFunnyFallMessage(): string {
    const messages = [
      "YUP, TIME FOR PUMPKIN SPICE EVERYTHING!",
  "YOU BET! BRING ON THE COZY SWEATERS AND CRUNCHY LEAVES.",
  "ABSOLUTELY! IT'S OFFICIALLY 'SWEATER WEATHER' SEASON.",
  "YES INDEED, LET THE AUTUMN ADVENTURES BEGIN!",
  "YOU BET IT IS! TIME TO FALL INTO A PILE OF LEAVES.",
  "INDEED, THE SEASON OF CRISP AIR AND WARM DRINKS IS HERE!",
  "YUP, LET'S GET READY FOR APPLE PICKING AND HAYRIDES!",
  "YOU KNOW IT! IT'S OFFICIALLY THE SEASON OF CHANGING COLORS.",
  "OH YEAH, IT'S OFFICIALLY TIME TO EMBRACE THE FALL VIBES!",
  "ABSOLUTELY! GET READY FOR COOL BREEZES AND HOT CHOCOLATE.",
  "YES, IT'S FINALLY THE SEASON OF SPOOKY DECORATIONS AND COSTUMES.",
  "YOU BET! TIME TO BUST OUT THOSE COZY BLANKETS AND FIREPLACES.",
  "INDEED, IT'S OFFICIALLY THE SEASON TO FALL IN LOVE WITH FALL!",
  "YUP, LET'S GET READY FOR CRUNCHY APPLES AND CINNAMON EVERYTHING.",
  "YOU BET IT IS! GET READY FOR THE MAGIC OF AUTUMN TO UNFOLD.",
  "YES INDEED, IT'S TIME TO ENJOY THE BEAUTY OF FALL FOLIAGE.",
  "ABSOLUTELY! IT'S THE SEASON TO EMBRACE ALL THINGS COZY AND COMFORTING.",
  "YUP, TIME TO TRADE IN THE SUNSCREEN FOR SCARVES AND GLOVES.",
  "YOU KNOW IT! LET'S GET READY FOR THE GREAT PUMPKIN CARVING!",
  "OH YEAH, IT'S TIME TO INDULGE IN ALL THE FALL FLAVORS AND TREATS.",
  "DEFINITELY! BRING ON THE CIDER AND THE CRISP, COOL AIR.",
  "YOU BET! LET'S CELEBRATE THE SEASON OF HARVEST AND ABUNDANCE.",
  "ABSOLUTELY! IT'S THE TIME FOR COZYING UP WITH A GOOD BOOK.",
  "YES INDEED, IT'S THE SEASON TO ENJOY BONFIRES AND SMORES.",
  "YUP, TIME TO EMBRACE THE HYGGE LIFESTYLE AND ALL ITS COMFORTS.",
  "YOU KNOW IT! LET'S GET READY FOR FALLING FOR FALL ALL OVER AGAIN.",
  "OH YEAH, IT'S THE PERFECT SEASON FOR LONG WALKS IN CRUNCHY LEAVES.",
  "DEFINITELY! IT'S THE SEASON TO CELEBRATE THANKSGIVING AND GRATITUDE.",
  "YOU BET! TIME TO ENJOY THE SIGHTS AND SMELLS OF AUTUMN.",
  "ABSOLUTELY! IT'S THE TIME TO APPRECIATE THE BEAUTY OF NATURE'S TRANSITION.",
  "YES INDEED, IT'S THE SEASON TO BREAK OUT THE FLANNEL AND PLAID.",
  "YUP, TIME TO EMBRACE THE COOL, MISTY MORNINGS AND GOLDEN AFTERNOONS."
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }

  /**
   * This method returns the current season based on the current date.
   * The seasons are defined as follows:
   * - Winter: December 21 - March 19
   * - Spring: March 20 - June 20
   * - Summer: June 21 - September 21
   * - Fall: September 22 - December 20
   *
   * @returns {string} The current season ('winter', 'spring', 'summer', 'fall', or 'Unknown season')
   */
  private getSeason() : string {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
    const currentDay = currentDate.getDate();

    // To set to fall state go to line 13 and set isFall = true;
    // and uncomment the line below
    // return 'fall';

    // Winter typically spans from December (12) to February (2)
    if ((currentMonth === 12 && currentDay >= 21) || currentMonth === 1 || currentMonth === 2 || (currentMonth === 3 && currentDay <= 19)) {
      return 'winter';
    }
    // Spring typically spans from March (3) to May (5)
    else if ((currentMonth === 3 && currentDay >= 20) || currentMonth === 4 || currentMonth === 5 || (currentMonth === 6 && currentDay <= 20)) {
      return 'spring';
    }
    // Summer typically spans from June (6) to August (8)
    else if ((currentMonth === 6 && currentDay >= 21) || currentMonth === 7 || currentMonth === 8 || (currentMonth === 9 && currentDay <= 21)) {
      return 'summer';
    }
    // Fall season typically spans from September (9) to November (11)
    else if ((currentMonth === 9 || (currentMonth === 8 && currentDay >= 22) || (currentMonth === 11 && currentDay <= 20))) {
      this.isFall = true;
      return 'fall';
    }
    else {
      return 'Unknown season';
    }
  }
}

