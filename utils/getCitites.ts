export const getCitiesByCountry = async (): Promise<{ id: number; name: string }[]> => {
    try {

        const response = await fetch(`https://api.countrystatecity.in/v1/countries/IN/states/MP/cities`, {
            headers: { 'X-CSCAPI-KEY': process.env.COUNTRY_STATE_API_KEY || "cad1ebcae3ed3825f6062e28efbb1063880faf2f463f7b5350cb689984b16fd6" },
            cache: "no-store",
        });
        console.log('Fetching cities for country IN...', response);
        if (response.ok) {
            const cities = await response.json();
            console.log(`Found ${cities.length} cities in IN`);
            return cities;
        } else {
            console.error('Country not found or no cities available');
            return [];
        }
    } catch (error) {
        console.error('Error fetching cities:', error);
        return [];
    }
};
