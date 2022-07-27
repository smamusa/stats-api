import BadgeData from '../api/model/BadgeData';

class MATLAB {
  constructor() {
    this.regex = /\d+\,?\d*/g;
    // TODO Change this URL to something more dynamic
    this.url = `https://www.mathworks.com/matlabcentral/profile/authors/${process.env.MATLAB_PROFILE_ID}`;
    this.labelColor = 'blue';
    this.color = 'orange';
  }

  readonly regex: RegExp;
  readonly url: string;
  readonly labelColor: string;
  readonly color: string;

  public payload(label: string, text: string): BadgeData {
    const matches: RegExpMatchArray | null = text.match(this.regex);
    // TODO Change this empty space string to something more meaningful
    const rank: string | null = matches ? matches[0] : ' ';
    const total: string | null = matches ? matches[1] : ' ';

    if (rank && total) {
      // For Average Rating only
      if (text.includes('AVERAGE')) {
        return new BadgeData(
          label,
          `${rank}.${total}`,
          this.labelColor,
          this.color
        );
      } else
        return new BadgeData(
          label,
          `${rank} of ${total}`,
          this.labelColor,
          this.color
        );
    } else return new BadgeData(label, rank, this.labelColor, this.color);
  }
}

enum CSSSelector {
  AnswersRank = '#answers_metrics p:first-child',
  AnswersReputation = '#answers_metrics p:nth-child(2)',
  Cody = '#cody_metrics p:first-child',
  CodyBadges = '#cody_metrics p:nth-child(4)',
  CodyScore = '#cody_metrics p:nth-child(3)',
  FileExchangeRank = '#fileexchange_metrics p:first-child',
  FileExchangeAverageRating = '#fileexchange_metrics p:nth-child(3)',
  FileExchangeContributions = '#fileexchange_metrics p:nth-child(4)',
  FileExchangeDownloads = '#fileexchange_metrics p:nth-child(6)',
  FileExchangeReputation = '#fileexchange_metrics p:nth-child(2)',
}

enum Label {
  AnswersRank = 'MATLAB Answers Rank',
  AnswersReputation = 'MATLAB Answers Reputation',
  Cody = 'MATLAB Cody Rank',
  CodyBadges = 'MATLAB Cody Badges',
  CodyScore = 'MATLAB Cody Score',
  FileExchangeRank = 'MATLAB Filexchange Rank',
  FileExchangeAverageRating = 'MATLAB Filexchange Average Rating',
  FileExchangeContributions = 'MATLAB Filexchange Contributions',
  FileExchangeDownloads = 'MATLAB Filexchange Downloads',
  FileExchangeReputation = 'MATLAB Filexchange Reputation',
}

enum Endpoint {
  AnswersRank = '/answers-rank',
  AnswersReputation = '/answers-reputation',
  Cody = '/cody-rank',
  CodyBadges = '/cody-badges',
  CodyScore = '/cody-score',
  FileExchangeRank = '/fileexchange-rank',
  FileExchangeAverageRating = '/fileexchange-avg-rating',
  FileExchangeContributions = '/fileexchange-contributions',
  FileExchangeDownloads = '/fileexchange-downloads',
  FileExchangeReputation = '/fileexchange-reputation',
}

export { MATLAB, CSSSelector, Label, Endpoint };
export default {};
