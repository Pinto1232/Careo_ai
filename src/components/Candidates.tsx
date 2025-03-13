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
import { Candidate } from './types/Candidate';

const Candidates = () => {
    const candidates: Candidate[] = [
        {
            name: 'Skylar Calzoni',
            role: 'Nurse, Manchester',
            comments: 3,
            likes: 1,
            avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
            name: 'Alfredo Gouse',
            role: 'Nurse, Watford',
            comments: 1,
            likes: 0,
            avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
            name: 'James Carder',
            role: 'Nurse, Milton Keynes',
            comments: 0,
            likes: 2,
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
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
                        <Typography sx={{ fontWeight: '700', fontSize: '16px', color: '#0F172A' }}>
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
                                justifyItems: 'center',
                                borderRadius: '6px',
                                color: '#27A376',
                                fontSize: '15px',
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
                                <Avatar alt={person.name} src={person.avatar} sx={{ width: 32, height: 32 }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{ fontWeight: '600', color: '#111827', fontSize: '16px' }}>
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
                                    <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#A0AEC0' }}>
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
                                <Box sx={{ cursor: 'pointer', color: '#111827' }}>
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