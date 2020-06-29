import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AssetsService {
  constructor() {}

  /**
   *
   * @returns array of monthNames
   */
  Monthes() {
    return [
      "January ",
      "February ",
      "March ",
      "April ",
      "May ",
      "June ",
      "July ",
      "August ",
      "September ",
      "October ",
      "November ",
      "December "
    ];
  }
  years(){ return[
    {id:1961,val:1961},{id:1962,val:1962},{id:1963,val:1963},{id:1964,val:1964},{id:1965,val:1965},{id:1966,val:1966},{id:1967,val:1967},{id:1968,val:1968},{id:1969,val:1969},{id:1970,val:1970},
    {id:1971,val:1971},{id:1972,val:1972},{id:1973,val:1973},{id:1974,val:1974},{id:1975,val:1975},{id:1976,val:1976},{id:1977,val:1977},{id:1978,val:1978},{id:1979,val:1979},{id:1980,val:1980},
    {id:1981,val:1981},{id:1982,val:1992},{id:1983,val:1983},{id:1984,val:1984},{id:1985,val:1985},{id:1986,val:1986},{id:1987,val:1987},{id:1988,val:1988},{id:1989,val:1989},{id:1990,val:1990},
    {id:1991,val:1991},{id:1982,val:1992},{id:1993,val:1993},{id:1994,val:1994},{id:1995,val:1995},{id:1996,val:1996},{id:1997,val:1997},{id:1998,val:1998},{id:1999,val:1999},{id:2000,val:2000},
    {id:2001,val:2001},{id:2002,val:2002},{id:2003,val:2003},{id:2004,val:2004},{id:2005,val:2005},{id:2006,val:2006},{id:2007,val:2007},{id:2008,val:2008},{id:2009,val:2009},{id:2010,val:2010}
   
  ]}
  days(){ return[
    {id:1,val:1},{id:2,val:2},{id:3,val:3},{id:4,val:4},{id:5,val:5},{id:6,val:6},{id:7,val:7},{id:8,val:8},{id:9,val:9},{id:10,val:10},
    {id:11,val:11},{id:12,val:12},{id:13,val:13},{id:14,val:14},{id:15,val:15},{id:16,val:16},{id:17,val:17},{id:18,val:18},{id:19,val:19},{id:20,val:20},
    {id:21,val:21},{id:22,val:22},{id:23,val:23},{id:24,val:24},{id:25,val:25},{id:26,val:26},{id:27,val:27},{id:28,val:28},{id:29,val:29},{id:30,val:30},
    {id:31,val:31}
  ]}
  months(){return[
    {id:1,val:1},{id:2,val:2},{id:3,val:3},{id:4,val:4},{id:5,val:5},{id:6,val:6},{id:7,val:7},{id:8,val:8},{id:9,val:9},{id:10,val:10},
    {id:11,val:11},{id:12,val:12}
  ]}
}
