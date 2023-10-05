import NameColumn from "./NameColumn";
import EmailColumn from "./EmailColumn";
import AddressColumn from "./AddressColumn";
import PhoneColumn from "./PhoneColumn";
import WebsiteColumn from "./WebsiteColumn";
import CompanyColumn from "./CompanyColumn";
import DeleteButton from "./DeleteButton";
import { Tr } from '@chakra-ui/react'

export default function TableRow({ user, deleteUser}){
    const
    {   id, name, username, email, 
        address: { street, suite, city, zipcode, geo: {lat, lng} },
            phone, website,
            company: {
                name: cname,
                catchPhrase,
                bs
            }
    } = user;

    return (
      <Tr key={id}>
        <NameColumn name={name} username={username} />
        <EmailColumn email={email} />
        <AddressColumn 
          street={street}
          suite={suite}
          city={city}
          zipcode={zipcode}
        />
        <PhoneColumn phone={phone}/>
        <WebsiteColumn  web={website}/>
        <CompanyColumn company={cname}/>
        <DeleteButton id={id} deleteUser={deleteUser}/>
      </Tr>
    );
  }