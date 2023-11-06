
import Bannder from '../Bannder/Bannder';
import Book_catagoris from '../Book_catagoris/Book_catagoris';
import Fotter from '../Footer/Fotter';
import HappyClient from '../HappyClient/HappyClient';
import Top_Popuer_Books from '../Top_Populer_Book/Top_Popuer_Books';
import Contack from '../contack/Contack';

const Home = () => {
    return (
        <div>
          <Bannder></Bannder>
          <Book_catagoris></Book_catagoris>
          <Top_Popuer_Books></Top_Popuer_Books>
          <HappyClient></HappyClient>
          <Contack></Contack>
          <Fotter></Fotter>
        </div>
    );
};

export default Home;