import { getFilteredRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
    // Read filters from the URL, e.g. /routes?region=central&season=autumn
    const { region, season } = req.query;

    const regions = await getListOfRegions();
    const seasons = await getListOfSeasons();
    const routes = await getFilteredRoutes(region, season);

    res.render('routes/list', {
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons
    });
};