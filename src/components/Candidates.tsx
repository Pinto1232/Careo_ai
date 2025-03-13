import {
    Avatar,
    Box,
    Grid,
    Typography,
} from '@mui/material';

import { BiPlus } from 'react-icons/bi';
import { MdMoreHoriz } from 'react-icons/md';
import { BsChatLeftText } from 'react-icons/bs';
import { RiAttachmentLine } from 'react-icons/ri';

const Candidates = () => {
    const candidates = [
        {
            name: 'Skylar Calzoni',
            role: 'Nurse, Manchester',
            comments: 3,
            likes: 1,
        },
        {
            name: 'Alfredo Gouse',
            role: 'Nurse, Watford',
            comments: 1,
            likes: 0,
        },
        {
            name: 'James Carder',
            role: 'Nurse, Milton Keynes',
            comments: 0,
            likes: 2,
        },
    ];

    if (!Array.isArray(candidates) || candidates.length === 0) {
        return (
            <Typography sx={{ padding: '16px', textAlign: 'center' }}>
                No candidates available.
            </Typography>
        );
    }

    return (
        <Grid container spacing={2} sx={{ padding: '16px' }}>
            <Grid item xs={12}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 16px',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Typography sx={{ fontWeight: '700', fontSize: '14px' }}>
                            Put Forward
                        </Typography>
                        <Box
                            sx={{
                                border: '2px solid #27A376',
                                width: '20px',
                                height: '20px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '6px',
                                color: '#27A376',
                                fontSize: '12px',
                                fontWeight: '700',
                            }}
                        >
                            {candidates.length}
                        </Box>
                    </Box>
                    <Box>
                        <BiPlus
                            style={{
                                width: '20px',
                                height: '20px',
                                cursor: 'pointer',
                            }}
                        />
                    </Box>
                </Box>

                {candidates.map((person, index) => (
                    <Box
                        key={person.name || index}
                        sx={{
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            boxShadow: ' 0px 0px rgba(0, 0, 0, 0.1)',
                            padding: '30px 16px',
                            marginBottom: index < candidates.length - 1 ? '16px' : 0,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '8px',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Avatar sx={{ width: 32, height: 32 }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{ fontWeight: '600', color: '#111827' }}>
                                        {person.name || 'Unknown'}
                                    </Typography>
                                    <Typography sx={{ fontWeight: '400', fontSize: '12px', color: '#A0AEC0' }}>
                                        {person.role || 'Unknown Role'}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', gap: '16px', marginLeft: '42px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <BsChatLeftText size={16} color="#999" />
                                    <Typography sx={{ fontSize: '12px', color: '#999' }}>
                                        {typeof person.comments === 'number' ? person.comments : 0}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <RiAttachmentLine size={16} color="#999" />
                                    <Typography sx={{ fontSize: '14px', color: '#A0AEC0' }}>
                                        {typeof person.likes === 'number' ? person.likes : 0}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ cursor: 'pointer' }}>
                                    <MdMoreHoriz size={20} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Grid>
    );
}

export default Candidates;