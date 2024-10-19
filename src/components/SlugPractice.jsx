import { Link, useParams } from "react-router-dom"
import { USER_PROFILE_DATA_LIST } from "../utils/helper"

const SlugPractice = () => {
    const profileArray = USER_PROFILE_DATA_LIST

    const { slug } = useParams();

    const generateSlug = (name) => {
        if (!name) return "";
        return name.toLowerCase().split(" ").join("-");
    }

    const filteredArray = profileArray.filter((v) => generateSlug(v.profile.name) === slug)

    return (
        <div>
            <div className="flex flex-col items-start justify-start">
                {profileArray.map((obj, index) => (
                    <Link key={index} to={`/profile-detail/${generateSlug(obj.profile.name)}`}>
                        {obj.profile.name}
                    </Link>
                ))}
            </div>
            {filteredArray.map((obj, index) => (
                <div className="flex flex-col items-start justify-center">
                    <p key={index} className="text-black text-4xl">{obj.profile.name}</p>
                    {obj.about.map((item, index) => <p>{item}</p>)}
                    {
                        obj.data.artworks.map((item, index) =>
                            <div>
                                {
                                    item.detailsData.map((detail, index) =>
                                        <div className="flex flex-col items-start justify-center">
                                            <p key={index}>{detail.title}</p>
                                            <p key={index}>{detail.subtitle}</p>
                                        </div>
                                    )}
                            </div>
                        )}
                </div>
            ))}
        </div>
    )
}

export default SlugPractice