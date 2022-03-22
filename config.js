var config = {
    style: 'mapbox://styles/stefan-norgaard/cl12apgzc000f14pofjst0jjo',
    accessToken: 'pk.eyJ1Ijoic3RlZmFuLW5vcmdhYXJkIiwiYSI6ImNrNnIxazUwMTAwZWEzbHRncnAwbXhubmcifQ.g1gLf2wnq9iaQk20mMnDpA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'NYC Street Trees',
    subtitle: 'A Tale of Many Trees',
    byline: 'By Stefan Norgaard, March 22, 2022',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Trees of the World',
            image: './img/tree.png',
            description: "There are a lot of trees in the world. Here is a picture of one of them. Let's look at one place in particular which has a lot of trees, but is not necessarily known for that.",
            location: {
                center: [0, 0],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'blocks-joined-trees-um',
                    opacity: 0,
                    duration: 3000,
                },
                {
                    layer: '2015-street-tree-census-subset',
                    opacity: 0,
                    duration: 3000,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: 'New York City',
            image: './img/legend-tree.png',
            description: 'New York City has lots of street trees. In fact, trees are a super important part of NYCs resilient infrastructure, saving millions a year in drainage costs and providing heat relief to blocks in the summer. This dataset shown here is from the 2015 NYC Street Tree Census - where volunteers measure mark and identify trees.',
            location: {
                center: [-73.94834, 40.80899],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2015-street-tree-census-subset',
                    opacity: 1,
                    duration: 3000,
                },
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Not So Many Trees',
            description: 'In this dataset, there are areas with not so many trees...',
            location: {
                center: [-73.94834, 40.80899],
                zoom: 18.75,
                pitch: 60,
                bearing: -60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-4',
            alignment: 'right',
            hidden: false,
            title: 'Many Trees',
            description: 'And areas with lots of trees!',
            location: {
                center: [-73.96059, 40.80322],
                zoom: 19,
                pitch: 60,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'blocks-joined-trees-um',
                    opacity: 0,
                    duration: 3000,
                },
                {
                    layer: '2015-street-tree-census-subset',
                    opacity: 1,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'right',
            hidden: false,
            title: 'Block Summary',
            image: './img/legend-block.png',
            description: 'Summarizing the tree data by block also allows us to view larger trends in tree cover in NYC. Greener blocks have higher average street tree diameters than lighter blocks.',
            location: {
                center: [-73.94834, 40.80899],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'blocks-joined-trees-um',
                    opacity: 1,
                    duration: 3000,
                },
                {
                    layer: '2015-street-tree-census-subset',
                    opacity: 1,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            title: 'The End',
            description: 'Tutorial Created for Methods in Spatial Research, Spring 2022.',
            location: {
                center: [-73.96089, 40.80827],
                zoom: 19,
                pitch: 30,
                bearing: 115
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'blocks-joined-trees-um',
                    opacity: 0,
                    duration: 3000,
                },
                {
                    layer: '2015-street-tree-census-subset',
                    opacity: 0,
                    duration: 3000,
                }
            ],
            onChapterExit: []
        }
    ]
};