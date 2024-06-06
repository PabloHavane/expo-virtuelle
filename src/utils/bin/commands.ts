// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import axios from 'axios';
import MatrixRain from '../../components/MatrixRain';



// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');  
  return `Bienvenue, voici la liste des commandes : 

Hackeurs :
draper hotz mckinnon mitnick poulsen anonymous lazarus 
mafiaboy dragon sandworm bear mysterious 

Autres :
help sumfetch google<votre recherche> news parrot

[ctrl+l]/clear: clear le terminal.\n
Utilisez 'sumfetch' pour afficher le résumé.
`;
};


// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const rain = async (args?: string[]): Promise<string> => {
  return `<MatrixRain />`;
};

export const mapascii = async (args?: string[]): Promise<string> => {
  return `<MapAscii />`;
};

export const parrot = async (args?: string[]): Promise<string> => {
  try {
    const response = await axios.get('https://api.parrot.live/generate');
    return response.data;
  } catch (error) {
    return 'Error fetching parrot';
  }
};

export const news = async (args?: string[]): Promise<string> => {
  try {
    const response = await axios.get('https://api.hackerwebapp.com/news');
    const data = response.data;
    const articles = data.map((article: any) => {
      return `
        <div>
          <h3>${article.title}</h3>
          <a href=${article.url} target="_blank">Lien de l'article</a>
        </div>
      `;
    });
    return articles.join('');
  } catch (error) {
    return 'Error fetching hacker news';
  }
};

export const mysterious = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  return 'Never gonna give you up!';
}

export const hack = async (args?: string[]): Promise<string> => {
  window.open('https://geekprank.com/hacker/simulateur/');
  return 'Hack the planet!';
}

export const draper = async (args?: string[]): Promise<string> => {
  const imageUrl = '/images/draper.jpg';
  const text = `John Draper, surnommé "Captain Crunch", est un pionnier du hacking. Né en 1943, il a découvert qu'un sifflet trouvé dans une boîte de céréales Cap'n Crunch pouvait produire une tonalité utilisée pour manipuler le système téléphonique et passer des appels longue distance gratuits. Draper a ensuite développé le "blue box", un dispositif électronique permettant de contrôler le réseau téléphonique, influençant ainsi des figures comme Steve Wozniak et Steve Jobs. Malgré ses contributions techniques, Draper a rencontré des problèmes juridiques et a été emprisonné pour ses activités de phone phreaking. Il a également développé des logiciels informatiques, notamment EasyWriter, l'un des premiers traitements de texte pour l'Apple II. Draper est reconnu comme une figure clé de la culture du hacking et de la sécurité informatique, ayant laissé un héritage important malgré ses démêlés avec la justice.`;

  const html = `
    <div>
      <img src="${imageUrl}" alt="John Draper Image" style="width:200px;height:auto;"/>
      <p>${text}</p>
    </div>
  `;

  return html;
};

export const hotz = async (args?: string[]): Promise<string> => {
  const imageUrl = '/images/hotz.jpg';
  const text = `George Hotz, également connu sous le pseudonyme "geohot", est célèbre pour être le premier à avoir réalisé un jailbreak de l'iPhone en 2007, permettant ainsi aux utilisateurs de contourner les restrictions d'Apple et d'installer des applications non autorisées. Il a également été impliqué dans le piratage de la PlayStation 3, ce qui lui a valu des poursuites judiciaires de la part de Sony. Hotz est considéré comme un prodige du hacking et a travaillé par la suite sur des projets de conduite autonome et d'intelligence artificielle.`;

  const html = `
    <div>
      <img src="${imageUrl}" alt="George Hotz Image" style="width:200px;height:auto;"/>
      <p>${text}</p>
    </div>
  `;

  return html;
}

export const mckinnon = async (args?: string[]): Promise<string> => {
  const imageUrl = '/images/mckinnon.jpg';
  const text = `Gary McKinnon est un hacker britannique qui est devenu célèbre pour avoir pénétré les systèmes informatiques de la NASA et du Pentagone entre 2001 et 2002. McKinnon cherchait des informations sur les ovnis et les technologies extraterrestres qu'il croyait être dissimulées par le gouvernement américain. Accusé d'avoir causé des dommages importants, McKinnon a fait face à une demande d'extradition vers les États-Unis, mais celle-ci a été bloquée par le Royaume-Uni pour des raisons de santé et de droits de l'homme.`;

  const html = `
    <div>
      <img src="${imageUrl}" alt="Gary McKinnon Image" style="width:200px;height:auto;"/>
      <p>${text}</p>
    </div>
  `;

  return html;
}

export const mitnick = async (args?: string[]): Promise<string> => {
  const imageUrl = '/images/mitnick.jpg';
  const text = `Kevin Mitnick est l'un des hackers les plus célèbres de l'histoire. Dans les années 1980 et 1990, il a infiltré des réseaux informatiques de grandes entreprises et agences gouvernementales, volé des logiciels et des données sensibles, et a été l'objet d'une chasse à l'homme massive par le FBI. Après son arrestation en 1995, il a été emprisonné pendant près de cinq ans. Libéré en 2000, Mitnick est devenu consultant en sécurité informatique et auteur, partageant son expertise pour aider à prévenir les cybercrimes.`;

  const html = `
    <div>
      <img src="${imageUrl}" alt="Kevin Mitnick Image" style="width:200px;height:auto;"/>
      <p>${text}</p>
    </div>
  `;

  return html;
}

export const poulsen = async (args?: string[]): Promise<string> => {
  const imageUrl = '/images/poulsen.jpg';
  const text = `Kevin Poulsen, également connu sous le pseudonyme "Dark Dante", a gagné en notoriété dans les années 1980 pour ses exploits en piratage téléphonique. Il est surtout connu pour avoir manipulé les lignes téléphoniques d'une station de radio pour gagner une Porsche 944 S2 lors d'un concours. Après plusieurs années de fuite, il a été arrêté en 1991 et a purgé une peine de prison. Depuis sa libération, Poulsen est devenu journaliste et rédacteur en chef de Wired, se concentrant sur des sujets de cybercriminalité et de sécurité informatique.` 

  const html = `
    <div>
      <img src="${imageUrl}" alt="Kevin Poulsen Image" style="width:200px;height:auto;"/>
      <p>${text}</p>
    </div>
  `;

  return html;
}

  export const anonymous = async (args?: string[]): Promise<string> => {
    const imageUrl = '/images/anonymous.jpg';
    const text = `Anonymous est un collectif décentralisé de hackers et d'activistes en ligne connu pour ses attaques contre diverses organisations, gouvernements, et entreprises. Leur objectif est souvent de défendre la liberté d'expression, la transparence, et la justice sociale. Ils ont mené des cyberattaques contre des cibles telles que Scientologie, Visa, MasterCard, et des sites gouvernementaux de plusieurs pays. Leurs opérations sont généralement caractérisées par l'utilisation de masques de Guy Fawkes et l'anonymat des participants.
    `;
  
    const html = `
      <div>
        <img src="${imageUrl}" alt="Anonymous Image" style="width:200px;height:auto;"/>
        <p>${text}</p>
      </div>
    `;
  
    return html;
  };

export const lazarus = async (args?: string[]): Promise<string> => {
  const imageUrl = '/images/lazarus.jpg';
  const text = `Lazarus est un groupe de hackers supposément soutenu par le gouvernement nord-coréen. Ils sont responsables de plusieurs cyberattaques de grande envergure, y compris le piratage de Sony Pictures en 2014, les attaques contre des institutions financières à travers le monde, et le tristement célèbre ransomware WannaCry en 2017. Les activités du groupe Lazarus visent souvent à générer des fonds pour la Corée du Nord, contournant ainsi les sanctions économiques internationales.`;

  const html = `
    <div>
      <img src="${imageUrl}" alt="Lazarus Image" style="width:200px;height:auto;"/>
      <p>${text}</p>
    </div>
  `;

  return html;
}

export const mafiaboy = async (args?: string[]): Promise<string> => { 
  const imageUrl = '/images/mafiaboy.png';
  const text = `Michael Calce, connu sous le pseudonyme "Mafiaboy", est un hacker canadien qui a attiré l'attention internationale en 2000, à l'âge de 15 ans, pour avoir lancé des attaques par déni de service (DDoS) contre des sites majeurs tels que Yahoo!, eBay, et CNN. Ces attaques ont temporairement paralysé des parties importantes de l'internet. Après son arrestation, il a été jugé et a purgé une peine de prison pour mineurs. Depuis, Calce est devenu consultant en sécurité et un défenseur de la cybersécurité.`;

  const html = `
    <div>
      <img src="${imageUrl}" alt="Michael Calce Image" style="width:200px;height:auto;"/>
      <p>${text}</p>
    </div>
  `;

  return html;
}

export const dragon = async (args?: string[]): Promise<string> => {
  const imageUrl = '/images/dragon.png';
  const text = `Double Dragon est un terme qui se réfère à deux groupes de hackers chinois notoires, APT41 (alias Winnti) et APT10. Ces groupes sont connus pour leurs cyberespionnage et activités de cybercriminalité soutenues par l'État chinois. Ils ont ciblé des entreprises et des gouvernements à travers le monde pour voler des données sensibles, des secrets commerciaux et des informations de propriété intellectuelle. Leurs opérations incluent des attaques complexes et prolongées, souvent avec des implications économiques et stratégiques.`;

  const html = `
    <div>
      <img src="${imageUrl}" alt="Double Dragon Image" style="width:200px;height:auto;"/>
      <p>${text}</p>
    </div>
  `;
  
  return html; 
}

export const sandworm = async (args?: string[]): Promise<string> => {
  const imageUrl = '/images/sandworm.jpeg';
  const text = `Sandworm est un groupe de hackers russes lié au GRU, l'agence de renseignement militaire de la Russie. Ils sont responsables de certaines des cyberattaques les plus destructrices de la dernière décennie, y compris les attaques contre le réseau électrique ukrainien, le malware NotPetya qui a causé des milliards de dollars de dommages à l'échelle mondiale, et des campagnes de phishing et de sabotage ciblant divers secteurs. Sandworm se spécialise dans les opérations cybernétiques offensives avec des impacts géopolitiques significatifs.`;

  const html = `
    <div>
      <img src="${imageUrl}" alt="Sandworm Image" style="width:200px;height:auto;"/>
      <p>${text}</p>
    </div>
  `;

  return html; 
}

export const bear = async (args?: string[]): Promise<string> => {
  const imageUrl = '/images/bear.jpg';
  const text = `Fancy Bear, également connu sous les noms APT28 ou Sofacy, est un autre groupe de hackers russes associé au GRU. Ils sont connus pour leurs cyberespionnage et campagnes de désinformation, ciblant principalement les gouvernements, les militaires, les médias et les organisations politiques. Fancy Bear est notamment impliqué dans le piratage des emails du Comité national démocrate pendant l'élection présidentielle américaine de 2016, ainsi que dans des attaques contre des institutions en Europe et en Asie. Leurs opérations visent souvent à influencer les affaires politiques et militaires mondiales.`;

  const html = `
    <div>
      <img src="${imageUrl}" alt="Fancy Bear Image" style="width:200px;height:auto;"/>
      <p>${text}</p>
    </div>
  `;

  return html; 
}


// Banner
export const banner = (args?: string[]): string => {
  return `
████████╗██╗  ██╗███████╗                               
╚══██╔══╝██║  ██║██╔════╝                               
   ██║   ███████║█████╗                                 
   ██║   ██╔══██║██╔══╝                                 
   ██║   ██║  ██║███████╗                               
   ╚═╝   ╚═╝  ╚═╝╚══════╝                               
                                                        
██╗  ██╗ █████╗  ██████╗██╗  ██╗███████╗██████╗ ███████╗
██║  ██║██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗██╔════╝
███████║███████║██║     █████╔╝ █████╗  ██████╔╝███████╗
██╔══██║██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗╚════██║
██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║███████║
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝                                                        

Exposition virtuelle réalisée par ${config.name}.

Utilisez 'help' pour obtenir la liste des commandes disponibles
Utilisez 'sumfetch' pour obtenir un résumé.
`;
};
