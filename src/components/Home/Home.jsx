
import Bannder from '../Bannder/Bannder';
import Book_catagoris from '../Book_catagoris/Book_catagoris';
import HappyClient from '../HappyClient/HappyClient';
import Top_Popuer_Books from '../Top_Populer_Book/Top_Popuer_Books';

const Home = () => {
    return (
        <div>
          <Bannder></Bannder>
          <Book_catagoris></Book_catagoris>
          <Top_Popuer_Books></Top_Popuer_Books>
          <HappyClient></HappyClient>
        </div>
    );
};

export default Home;