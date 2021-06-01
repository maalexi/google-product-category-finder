import { NextApiRequest, NextApiResponse } from "next";
import data from '../../../data.json';


const handler = async (req: NextApiRequest, res: NextApiResponse<string>) => {
    const id = req.query.id;
    const category = data.find(i => i.id === id);
    if(!category) return res.status(404).json("Invalid Category ID");
    if(category.level6) return res.status(200).json(category.level6);
    if(category.level5) return res.status(200).json(category.level5);
    if(category.level4) return res.status(200).json(category.level4);
    if(category.level3) return res.status(200).json(category.level3);
    if(category.level2) return res.status(200).json(category.level2);
    return res.status(200).json(category.level1);
}

export default handler;