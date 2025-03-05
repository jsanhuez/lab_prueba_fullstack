import { CardItem, CustomFilter, Hero } from '../components';
import { HomeProps } from '../types';
import { fetchCardsBySet, fetchSets } from '../utils';

export default async function Index({ searchParams }: HomeProps) {
  const params = await searchParams;
  const sets = await fetchSets();
  const filterSets: { title: string; value: string }[] = [];
  sets.map((set: any) => {
    filterSets.push({ title: set.name, value: set.id });
  });

  const allCards = await fetchCardsBySet({
    set: params.set || sets[0].id,
  });

  const currentSet = sets.filter((set: any) => {
    return set.id === (params.set || sets[0].id);
  });

  const isDataEmpty =
    !Array.isArray(allCards) || allCards.length < 1 || !allCards;

  return (
    <main className="overflow-hidden">
      <Hero currentSet={currentSet[0]} />

      <div className="mt-0 padding-x max-width" id="discover">
        <div className="home__filters">
          <CustomFilter title="set" options={filterSets} />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCards?.map((card, id) => (
                <CardItem
                  key={id}
                  card={card}
                  symbolSet={currentSet[0].symbol_url}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Ups, no hay resultados
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
